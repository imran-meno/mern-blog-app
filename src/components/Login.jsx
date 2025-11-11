import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:3000/login", { email, password });
    
    // Save token properly
    localStorage.setItem('token', res.data.token);
    console.log("Login success:", res.data);

    // Navigate after successful login
    navigate('/home');
  } 
  catch (err) {
    console.error("Login failed:", err);
  }
};


  return (
    <div className="login_div">
      <div className="Login_1">
        <div className="main_input">
          <h1>Login Here</h1>
          <div className="inputs">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Log in</button>
            </form>
            <p>
              Don’t have an account? <Link to='/signup'>Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
