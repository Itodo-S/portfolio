import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FaAppStore } from "react-icons/fa";
const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>

        <div className="services-list">
          <div>
            <BsGlobe className="i-con" />
            <h2>Web Development</h2>
            <p>
              I'm a software developer with experince in Web development, and
              experties in front end development, a master of React, JavaScript,
              TypeScript, HTML, CSS, SCSS, Tailwind CSS, Material Ui. Proficient
              with Vue and Angular. I also have experties in related tools such
              as Redux, Vuex, and many more. And have worked with companies like
              Rocketware LTD, Fundhill. and a lot of other freelancing Jobs.
            </p>
            {/* <a href="#">Learn more</a> */}
          </div>

          <div>
            <FaAppStore className="i-con" />
            <h2>Mobile app Development</h2>
            <p>
                I Create Seemless Interface with ReactNative, delivering beautifull mobile apps
            </p>
            {/* <a href="#">Learn more</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
