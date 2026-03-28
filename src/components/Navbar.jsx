import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">NewsHub</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category/business">Business</NavLink>
        <NavLink to="/category/sports">Sports</NavLink>
        <NavLink to="/category/technology">Technology</NavLink>
        <NavLink to="/category/entertainment">Movies</NavLink>

        {/* 🔥 ADD THIS */}
        <NavLink to="/admin">Admin</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;