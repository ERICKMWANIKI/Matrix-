import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/assets/Matrixlogo.jpeg" alt="Matrix Precast Concrete" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/beam-block">Beam & Block</Link>
        </li>
        <li>
          <Link to="/hollow-blocks">Hollow Blocks</Link>
        </li>
        <li>
          <Link to="/paving-blocks">Paving Blocks</Link>
        </li>
        <li>
          <Link to="/road-kerb">Road Kerb & Accessories</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/downloads">Downloads</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
      <div className="social-icons">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <div className="auth-buttons">
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/signup">
          <button>SignUp</button>
        </Link>
        <Link to="/contactus">
          <button>ContactUs</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
