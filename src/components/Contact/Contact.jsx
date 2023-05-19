import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2t7wpnb", "template_gv172cd", form.current, "A01oAS7rnrzZG-rti")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

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
                href="https://wa.me/qr/ATWLCIT7WKLFK1"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com/itodosimon_?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/itodo-itodo-ba6568235/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Itodo-S/"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <a href={assets.itodo_resume} download className="btn btn2">
              Download CV
            </a>
          </div>
          <div className="contact-right">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
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
