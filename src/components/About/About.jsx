import React, { useState } from "react";
import assets from "../../assets";

const About = () => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const onClick = () => {
    setOpen((open) => !open);
    setDisplay(false);
    setShow(false);
  };

  const onToggle = () => {
    setDisplay((display) => !display);
    setOpen(false);
    setShow(false);
  };

  const handleClick = () => {
    setShow((show) => !show);
    setOpen(false);
    setDisplay(false);
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={assets.about_image} alt="profile" />
          </div>

          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>

            <p>
              Engaged and communicative Frontend expert with 6 years of
              professional experience. Acquired excellent skills in unit
              integration testing to predict and eliminate problems, saving well
              over 100k in budget. Experienced in MERN Stack and JavaScript.
              Seeking to apply my expertise towards developing innovative
              solutions.
            </p>

            <div className="tab-titles">
              <p
                className={`${show ? "active-link" : ""} tab-links`}
                onClick={handleClick}
              >
                Skills
              </p>
              <p
                className={`${open ? "active-link" : ""} tab-links`}
                onClick={onClick}
              >
                Experience
              </p>
              <p
                className={`${display ? "active-link" : ""} tab-links`}
                onClick={onToggle}
              >
                Education
              </p>
            </div>

            <div
              className={`${show ? "active-tab" : ""} tab-contents`}
              id="skills"
            >
              <ul>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web app Development
                </li>
                <li>
                  <span>Mobile Development</span>
                  <br />
                  Building Android/iOS apps
                </li>
              </ul>
            </div>

            <div
              className={`${open ? "active-tab" : ""} tab-contents`}
              id="experience"
            >
              <ul>
                <li>
                  <span>May 2022 - PRESENT</span>
                  <br />
                  Frontend Developer at Fundhill
                </li>
                <li>
                  <span>August 2020 - May 2021</span>
                  <br />
                  Software Developer at Rocket Software
                </li>
              </ul>
            </div>

            <div
              className={`${display ? "active-tab" : ""} tab-contents`}
              id="education"
            >
              <ul>
                <li>
                  <span>February 2017 - September 2021</span>
                  <br /> Bachelor of Education at University of Jos, Nigeria
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
