const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const UserSchema = require('./models/users');
const BlogSchema = require('./models/blogs');

dotenv.config(); // Load .env variables

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// 🧠 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// 🔐 Middleware to verify token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch {
    return res.status(400).json({ message: "Invalid token" });
  }
}

// 🧍‍♂️ Signup
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await UserSchema.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    await UserSchema.create({ username, email, password: hashed });

    res.json({ message: 'User added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 🔑 Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await UserSchema.findOne({ email });
    if (!userFound) return res.status(400).json({ message: 'User not found' });

    const checkPass = await bcrypt.compare(password, userFound.password);
    if (!checkPass) return res.status(400).json({ message: 'Incorrect password' });

    const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 🖼️ File Upload (Multer)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

// ✍️ Create Blog (Protected)
app.post('/create', verifyToken, upload.single('image'), async (req, res) => {
  try {
    const { tech, heading, detail } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

    const newPost = await BlogSchema.create({ tech, heading, detail, image: imagePath });
    res.json({ message: 'Blog created successfully', post: newPost });
  } catch (err) {
    res.status(500).json({ message: 'Error creating blog' });
  }
});

// 📚 Display Blogs (Public or Protected — your choice)
app.get('/display', async (req, res) => {
  try {
    const blogs = await BlogSchema.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// 🚀 Server start
app.listen(process.env.PORT, () => console.log(`✅ Server running on port ${process.env.PORT}`));
