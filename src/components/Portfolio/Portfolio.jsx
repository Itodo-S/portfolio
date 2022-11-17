import React from "react";
import assets from "../../assets";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div id='#portfolio'>
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">
          <div className="work">
            <img src={assets.showcase} alt="work" />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                sapiente commodi nisi aut tempora facilis porro corrupti
                aspernatur.
              </p>
              <a href="#">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="work">
            <img src={assets.webdev} alt="work" />
            <div className="layer">
              <h3>Music App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                sapiente commodi nisi aut tempora facilis porro corrupti
                aspernatur.
              </p>
              <a href="#">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="work">
            <img src={assets.microfinance} alt="work" />
            <div className="layer">
              <h3>Online Shopping App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                sapiente commodi nisi aut tempora facilis porro corrupti
                aspernatur.
              </p>
              <a href="#">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See More</a>
      </div>
    </div>
  );
};

export default Portfolio;
