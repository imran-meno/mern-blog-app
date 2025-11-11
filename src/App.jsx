import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Article from "./components/Article.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";
import CreatePosts from './components/CreatePosts.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; // import it

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes */}
        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Article />} />
          <Route path="/create" element={<CreatePosts />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
