import React, { useEffect } from "react";
// import './Main.css';
import { Link } from "react-router-dom";
import mainScript from "./MainScript";

const Main = () => {
  useEffect(() => {
    // Call the function to execute your vanilla JavaScript code
    mainScript();
  }, []);

  // Handle form submission to Google Sheets
  useEffect(() => {
    const form = document.forms["google-sheet"];
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const scriptURL =
          "https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec";
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) =>
            alert("Thanks for contacting us! We will reach out soon.")
          )
          .catch((error) => console.error("Error!", error.message));
      });
    }
  }, []);

  return (
    <>
      {/* <div className="spinner"></div> */}
      <div>
        <main className="main-content">
          <header>
            <div className="forms">
              <div className="section__container header__container">
                <div className="header__content">
                  <h1 id="main-head" className="text1">
                    Welcome to a Place of Healing and Growth
                  </h1>
                  <p className="text1">
                    "Every Step You Take Brings You Closer to Healing" "You’re
                    Not Alone—We’re Here to Help" "Your Mental Health
                    Matters—Take the First Step Today" "Find Strength and
                    Resilience in Every Moment" "Healing is a Journey—Let Us
                    Walk It with You"
                  </p>
                  <Link to="#all-services">
                    <button className="btn_service">See Services</button>
                  </Link>
                </div>
                <div className="header__form">
                  <form method="post" name="google-sheet">
                    <h4>Book Now</h4>
                    <input type="text" placeholder="First Name" name="First" />
                    <input type="text" placeholder="Last Name" name="Last" />
                    <input type="text" placeholder="Email" name="Email" />
                    <input type="text" placeholder="Phone No." name="Mobile" />
                    <button
                      className="btn form__btn"
                      value="Submit"
                      name="submit"
                    >
                      Book Appointment
                    </button>
                  </form>
                  {/* <script>
                const scriptURL = 'https://script.google.com/macros/s/AKfycbxcnbqhzfC9-ove-xFh4icp0eViWDUcjBL6lcgIsYGN8xcj0wPYLBbJuaGiut8ShaF-zw/exec'
                const form = document.forms['google-sheet']
              
                form.addEventListener('submit', e => {
                  e.preventDefault()
                  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                    .catch(error => console.error('Error!', error.message))
                })
              </script> */}
                </div>
              </div>
            </div>
          </header>
          {/* <script>
        const toggleButton = document.getElementById("nav-toggle");
        const navLinks = document.getElementById("nav-links");

        toggleButton.addEventListener("click", () => {
          navLinks.classList.toggle("active");
        });
      </script> */}
          <section
            className="section__container service__container"
            id="service"
          >
            <div className="forms1">
              <div className="service__header" id="all-services">
                <div className="service__header__content">
                  <h2 className="section__header2">Our Special service</h2>
                </div>
                <Link to="#">
                  <button className="service__btn">Ask A Service</button>
                </Link>
              </div>
            </div>

            <div className="container3">
              <div className="service__grid">
                <div className="service__card left">
                  <span>
                    <i className="ri-brain-line"></i>
                  </span>
                  <h4>Psychology Test</h4>
                  <p>
                    A psychology test is an assessment tool used to measure
                    various aspects of an individual’s mental state, cognitive
                    abilities, personality traits, or psychological functioning
                  </p>
                  <Link to="/psychological">Learn More</Link>
                </div>
                <div className="service__card center">
                  <span>
                    <i className="ri-mental-health-line"></i>
                  </span>
                  <h4>Physical Health Problems</h4>
                  <p>
                    Chronic fatigue or sleep disturbances Unexplained physical
                    symptoms (e.g., headaches, stomach issues) Poor self-care or
                    neglect of physical health
                  </p>
                  <Link to="/physical">Learn More</Link>
                </div>
                <div className="service__card right">
                  <span>
                    <i className="ri-emotion-sad-line"></i>
                  </span>
                  <h4>Mood Disorders</h4>
                  <p>
                    Persistent sadness or depressive symptoms Extreme mood
                    swings and manic episodes Loss of interest in activities and
                    social withdrawal Difficulty managing emotions and mood
                    stability
                  </p>
                  <Link to="/mood">Learn More</Link>
                </div>
                <div className="service__card left">
                  <span>
                    <i className="ri-community-line"></i>{" "}
                  </span>
                  <h4>Social Problems</h4>
                  <p>
                    Difficulty forming or maintaining relationships Social
                    anxiety or avoidance Conflict with family or friends
                  </p>
                  <Link to="/socialProblems">Learn More</Link>
                </div>
                <div className="service__card center">
                  <span>
                    <i className="ri-emotion-line"></i>
                  </span>
                  <h4>Emotional Problems</h4>
                  <p>
                    Persistent sadness, anxiety, or mood swings Feelings of
                    hopelessness or helplessness Emotional numbness or
                    detachment
                  </p>
                  <Link to="/emotional">Learn More</Link>
                </div>
                <div className="service__card right">
                  <span>
                    <i className="ri-book-line"></i>
                  </span>
                  <h4>Academic Problems</h4>
                  <p>
                    Difficulty concentrating or studying Poor academic
                    performance or grades Absenteeism or school avoidance
                  </p>
                  <Link to="/academic">Learn More</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="section__container about__container" id="about">
            <div className="about__content left" id="about-section">
              <h2 className="container4">About Us</h2>
              <p className="container1">
                Welcome to our healthcare website, your one-stop destination for
                reliable and comprehensive mental health information. We are
                committed to promoting wellness and providing valuable resources
                to empower you on your health journey. Explore our extensive
                collection of expertly written articles and guides covering a
                wide range of health topics. From understanding common medical
                conditions to tips for maintaining a healthy lifestyle, our
                content is designed to educate, inspire, and support you in
                making informed choices for your health. Discover practical
                health tips and lifestyle advice to optimize your physical and
                mental well-being. We believe that small changes can lead to
                significant improvements in your quality of life, and we're here
                to guide you on your path to a healthier and happier you.
              </p>
            </div>
            <div className="about__image">
              <img src="./Frontend/assets/about.jpg" alt="about" />
            </div>
          </section>

          <section className="section__container why__container" id="blog">
            <div className="about__image">
              <img src="./Frontend/assets/choose-us.jpg" alt="why choose us" />
            </div>
            <div className="why__content right">
              <h2 className="container" id="why_choose">
                Why Choose Us
              </h2>
              <p className="container2">
                With a steadfast commitment to your well-being, our team of
                highly trained healthcare professionals ensures that you receive
                nothing short of exceptional patient experiences.
              </p>
              <div className="container2">
                <div className="why__grid">
                  <span>
                    <i className="ri-hand-heart-line"></i>
                  </span>

                  <div>
                    <h4>Intensive Care</h4>
                    <p>
                      Our Intensive Care Unit is equipped with advanced
                      technology and staffed by team of professionals
                    </p>
                  </div>

                  <span>
                    <i className="ri-truck-line"></i>
                  </span>

                  <div>
                    <h4>Free Ambulance Car</h4>
                    <p>
                      A compassionate initiative to prioritize your health and
                      well-being without any financial burden.
                    </p>
                  </div>

                  <span>
                    <i className="ri-hospital-line"></i>
                  </span>

                  <div>
                    <h4>Medical and Surgical</h4>
                    <p>
                      Our Medical and Surgical services offer advanced
                      healthcare solutions to address medical needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section__container doctors__container" id="pages">
            <div className="doctors__header">
              <div className="doctors__header__content">
                <h2 className="container4">Our Special Doctors</h2>
                <p className="container1">
                  We take pride in our exceptional team of doctors, each a
                  specialist in their respective fields.
                </p>
              </div>

              <div className="doctors__nav">
                <span>
                  <i className="ri-arrow-left-line"></i>
                </span>
                <span>
                  <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </div>
            <div className="container5">
              <div className="doctors__grid">
                <div className="doctors__card left">
                  <div className="doctors__card__image">
                    <img src="./Frontend/assets/doctor-1.jpg" alt="doctor" />
                    <div className="doctors__socials">
                      <span>
                        <i className="ri-instagram-line"></i>
                      </span>
                      <span>
                        <i className="ri-facebook-fill"></i>
                      </span>
                      <span>
                        <i className="ri-heart-fill"></i>
                      </span>
                      <span>
                        <i className="ri-twitter-fill"></i>
                      </span>
                    </div>
                  </div>
                  <h4>Dr. Emily Smith</h4>
                  <p>Cardiologist</p>
                </div>
                <div className="doctors__card">
                  <div className="doctors__card__image">
                    <img src="./Frontend/assets/doctor-2.jpg" alt="doctor" />
                    <div className="doctors__socials">
                      <span>
                        <i className="ri-instagram-line"></i>
                      </span>
                      <span>
                        <i className="ri-facebook-fill"></i>
                      </span>
                      <span>
                        <i className="ri-heart-fill"></i>
                      </span>
                      <span>
                        <i className="ri-twitter-fill"></i>
                      </span>
                    </div>
                  </div>
                  <h4>Dr. James Anderson</h4>
                  <p>Neurosurgeon</p>
                </div>
                <div className="doctors__card right">
                  <div className="doctors__card__image">
                    <img src="./Frontend/assets/doctor-3.jpg" alt="doctor" />
                    <div className="doctors__socials">
                      <span>
                        <i className="ri-instagram-line"></i>
                      </span>
                      <span>
                        <i className="ri-facebook-fill"></i>
                      </span>
                      <span>
                        <i className="ri-heart-fill"></i>
                      </span>
                      <span>
                        <i className="ri-twitter-fill"></i>
                      </span>
                    </div>
                  </div>
                  <h4>Dr. Michael Lee</h4>
                  <p>Dermatologist</p>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="section__container footer__container">
              <div className="footer__col">
                <h3>
                  Mind<span>Ease</span>
                </h3>
                <p>
                  We are honored to be a part of your healthcare journey and
                  committed to delivering compassionate, personalized, and
                  top-notch care every step of the way.
                </p>
                <p>
                  Trust us with your health, and let us work together to achieve
                  the best possible outcomes for you and your loved ones.
                </p>
              </div>
              <div className="footer__col">
                <h4>About Us</h4>
                <p>Home</p>
                <p>About Us</p>
                <p>Work With Us</p>
                <p>Our Blog</p>
                <p>Terms & Conditions</p>
              </div>
              <div className="footer__col">
                <h4>Services</h4>
                <p>Search Terms</p>
                <p>Advance Search</p>
                <p>Privacy Policy</p>
                <p>Suppliers</p>
                <p>Our Stores</p>
              </div>
              <div className="footer__col">
                <h4>Contact Us</h4>
                <p>
                  <i className="ri-map-pin-2-fill"></i> 123, London Bridge
                  Street, London
                </p>
                <p>
                  <i className="ri-mail-fill"></i> support@care.com
                </p>
                <p>
                  <i className="ri-phone-fill"></i> (+012) 3456 789
                </p>
              </div>
            </div>
            <div className="footer__bar">
              <div className="footer__bar__content">
                <p>Copyright © 2024 MindEase. All rights reserved.</p>
                <div className="footer__socials">
                  <span>
                    <i className="ri-instagram-line"></i>
                  </span>
                  <span>
                    <i className="ri-facebook-fill"></i>
                  </span>
                  <span>
                    <i className="ri-heart-fill"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-fill"></i>
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Main;
