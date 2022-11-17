import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const Header = () => {
const [open, setOpen] = useState(false)

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <div id="header">
      <div className="container">
        <nav>
          <p className="log">
            {" "}
            <span>I</span>todo.
          </p>

          <ul className={open ? 'ul' : 'ul2' }>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <i className="fas" onClick={handleClose}>
              <FaTimes/>
            </i>
          </ul>

          <i className="fas" onClick={handleOpen}>
            <FiMenu />
          </i>
        </nav>

        <div className="header__text">
          <p>Frontend Developer</p>
          <h1>
            Hi, i am <span>Itodo</span> <br /> Simon from Nigeria
          </h1>
        </div>
      </div>
      <div className="header__image_container">
        <div id="header__image">
          <div className="header__image_spiner"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
