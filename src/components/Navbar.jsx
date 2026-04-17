import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (link) => (activeLink === link ? "active" : "");

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">PORTFOLIO</div>
          <nav className="nav-bar">
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a
                  href="/home"
                  className={isActive("home")}
                  onClick={() => {
                    setActiveLink("home");
                    closeMenu();
                  }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className={isActive("service")}
                  onClick={() => {
                    setActiveLink("service");
                    closeMenu();
                  }}
                >
                  SERVICE
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={isActive("about")}
                  onClick={() => {
                    setActiveLink("about");
                    closeMenu();
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={isActive("blog")}
                  onClick={() => {
                    setActiveLink("blog");
                    closeMenu();
                  }}
                >
                  BLOG
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={isActive("contact")}
                  onClick={() => {
                    setActiveLink("contact");
                    closeMenu();
                  }}
                >
                  CONTACT
                </a>
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
