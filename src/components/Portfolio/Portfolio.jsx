import React from "react";
import assets from "../../assets";
import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">
          <div className="work">
            <img src={assets.showcase} alt="work" />
            <div className="layer">
              <h3>An Information Site</h3>
              <p>
                This site gives you Information about available services and
                products at fundhill
              </p>
              <a href="https://fundhill-s.vercel.app/" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="work">
            <img src={assets.webdev} alt="work" />
            <div className="layer">
              <h3>A Micro-finance Bank App</h3>
              <p>
                This is a microfinance bank app which can be used to save and
                transfer money. Providing financial services
              </p>
              <a href="https://fundhillmvp.netlify.app/" target="_blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="work">
            <img src={assets.microfinance} alt="work" />
            <div className="layer">
              <h3>Online Shopping App</h3>
              <p>
                This app provide Shopping services to it's users, and also helpe
                them to locate supermarket colse to them. STILL IN PRODUCTION
              </p>
              <a href="https://warta-cart.vercel.app/" target='_blank'>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          See More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
