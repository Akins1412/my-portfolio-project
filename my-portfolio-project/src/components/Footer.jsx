import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <div className="social-icon">
          <a
            href="https://github.com/Akins1412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="https://x.com/yhomi99" target="_blank">
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-akins-0b7a92284/?skipRedirect=true"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>

        <p>© {year} Emmanuel Akins. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
