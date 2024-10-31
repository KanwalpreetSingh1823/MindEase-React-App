import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p className="text">
            We’re Here to Listen and Help You Thrive. At MindEase, your mental
            well-being is our priority. Whether you need support or have
            questions.
          </p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              <span>Phone No.</span>
              <span className="text">12478-47844</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <span>E-mail</span>
              <span className="text">mail@mindease.com</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>Address</span>
              <span className="text">
                2939 Patrick Street, Vicotria TX, United States
              </span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock"></i>
              </span>
              <span>Opening Hours</span>
              <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Message"
                className="form-control"
              ></textarea>
              <input type="submit" className="send-btn" value="send message" />
            </form>
            <div>
              <img src="image/contact-png.png" alt="" />
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp"
            width="100%"
            height="450"
            frameborder="0"
            // style={"border:0"}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="map"
          ></iframe>
        </div>

        <div className="contact-footer">
          <h3>Follow Us</h3>
          <div className="social-links">
            <Link to="/" className="fab fa-facebook-f"></Link>
            <Link to="/" className="fab fa-twitter"></Link>
            <Link to="/" className="fab fa-instagram"></Link>
            <Link to="/" className="fab fa-linkedin"></Link>
            <Link to="/" className="fab fa-youtube"></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
