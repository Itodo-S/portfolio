import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import assets from "../../assets";
const Contact = () => {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p>
              <i>
                <IoIosSend />
              </i>{" "}
              helloitodo@gmail.com
            </p>
            <p>
              <i>
                <FaPhoneSquareAlt />
              </i>{" "}
              +234 08167225323
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/itodo-itodo-ba6568235/"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/itodo-itodo-ba6568235/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/Itodo-S/" target="_blank">
                <FaGithub />
              </a>
            </div>
            <a href={assets.itodo_resume} download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit" className="btn btn2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
