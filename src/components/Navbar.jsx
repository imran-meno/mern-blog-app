import { Link } from "react-router-dom";
import logo from "../assets/riseblog.png";

function Navbar() {
  return (
    <div className="heroSection">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navBar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
