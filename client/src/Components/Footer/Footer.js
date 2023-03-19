import "./Footer.css";
import React from "react";
import { SiLinkedin } from "react-icons/si";
import { GoMarkGithub } from "react-icons/go";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="FooterContainer">
      <footer>
        <div className="Demo12">
          <span>Connect with us:</span>
        </div>
        <div className="OuterContainer">
          <div>
            <div className="NameContainer">
              <p>Allen Benny</p>
            </div>
            <div className="SocialMedia">
              <Link to="https://www.linkedin.com/in/allen-benny038/" target="_blank">
                <SiLinkedin />
              </Link>
              <Link to="https://github.com/allenhack638" target="_blank">
                <GoMarkGithub />
              </Link>
            </div>
          </div>

          <div>
            <div className="NameContainer">
              <p>Yashu Goel</p>
            </div>
            <div className="SocialMedia">
              <Link to="https://www.linkedin.com/in/yashu-goel/" target="_blank">
                <SiLinkedin />
              </Link>
              <Link to="https://github.com/Yashu-Goel" target="_blank">
                <GoMarkGithub />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="CopyRight">
        <p className="last-mein">Copyright © 2023 Paisa बचाओ. All Rights Reserved. </p>

        </div>

    </div>
  );
};

export default Footer;
