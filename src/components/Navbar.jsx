import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">PORTFOLIO</div>
          <nav className="nav-bar">
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="/home" className="active">
                  HOME
                </a>
              </li>
              <li>
                <a href="/service">SERVICE</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/blog">BLOG</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
