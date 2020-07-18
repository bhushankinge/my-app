import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import "./contactUs.css";

const Contact = props => {
  return (
    <React.Fragment>
      {/*---Contact section---*/}
      <section id="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email us and keep upto date with our latest news </p>
          <div className="contact-form">
            {/*---First grid section---*/}
            <div id="info-content">
              <i>
                <FaMapMarkerAlt size="3em" />
              </i>
              <span className="form-info">192 City Boston America #345</span>
              <br />

              <i>
                <MdPhoneInTalk size="3em" />
              </i>
              <span className="form-info">Phone no:- +91 7066602856 </span>
              <br />

              <i>
                <IoIosMail size="3em" />
              </i>
              <span className="form-info">kingebhushan2000@gmail.com</span>
              <br />
            </div>

            {/*---Second grid section---*/}

            <div>
              <form>
                <input type="text" placeholder="Your Name" required />

                <input type="text" placeholder="Last Name" required />

                <input type="Email" placeholder="Your Email" required />

                <input
                  type="text"
                  placeholder="Subject of this message"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  rows="5"
                  required
                ></textarea>
                <button className="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
