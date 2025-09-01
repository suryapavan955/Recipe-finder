


import { Link } from "react-router-dom";
import logo from "./images/logos.jpg";
import "./navbar.css";

function NavButton() {
  return (
     <Link to="/recipe">
    <button className="nav-btn">
      Browse Recipes
    </button>
    </Link>
  );
}

export function Navbar() {
  return (
    <nav className="nav">
      {/* Logo & Title */}
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
        <h2 className="logo-text">Healthy Recipe Finder</h2>
      </div>

      {/* Navigation Links */}
      <ul className="list">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/recipe" className="nav-link">Recipes</Link>
        </li>
      </ul>

      {/* Right Button */}
      <NavButton />
    </nav>
  );
}
