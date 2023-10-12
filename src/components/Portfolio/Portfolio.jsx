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
            <img src={assets.cantant} alt="work" />
            <div className="layer">
              <h3>Cantant - Smarter Bookkeeping</h3>
              <p>
                Cantant: All-in-one cashflow manager for informed business
                decisions. Simplify bookkeeping and gain valuable insights.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.cantantmobile&hl=en&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="work">
            <img src={assets.jaris} alt="work" />
            <div className="layer">
              <h3>Biology Centre</h3>
              <p>Jaris: A Computational Biology Centre</p>
              <a
                href="https://jarisresearch.com/"
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                href="https://warta-cart.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <a href="/" className="btn">
          See More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
