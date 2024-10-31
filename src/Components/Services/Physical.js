import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Physical = () => {
  useEffect(() => {
    const typed = new Typed(".textline", {
      strings: ["Stroke", "Multiple Sclerosis", "Tension Headaches "],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <section class="main">
        {/* <script>
      const toggleButton = document.getElementById("nav-toggle");
      const navLinks = document.getElementById("nav-links");

      toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    </script> */}
        <div class="container">
          <div class="hero-section">
            <section id="intro">
              <h1>
                Physical Tests = <span class="textline"></span>
              </h1>
              <p>
                Psychological tests are standardized instruments used to measure
                a specific aspect of an individual's mental health. These tests
                can help assess cognitive abilities, emotional functioning,
                personality traits, and more.
              </p>
            </section>
          </div>
        </div>
      </section>
      {/* <script>
    var type = new Typed(".textline", {
      strings: [" Cognitive", "Intelligence", "Aptitude"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  </script> */}

      {/* <marquee behavior="scroll" direction="left"> */}
      <div class="images">
        <div class="image">
          <img src="/Frontend/assets/Tests/Psycho-1.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/Tests/Psycho-2.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/Tests/Psycho-3.jpeg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/Tests/Psycho-4.jpeg" alt="Stress" />
        </div>
      </div>
      {/* </marquee> */}

      <h2 id="all-types-test">Types of Psychological Tests</h2>

      <div class="test">
        <div class="test">
          <li>
            <strong>Personality Tests</strong>
            <p>
              Assess personality traits and how they influence
              behavior.Personality tests are tools used to evaluate and
              understand various personality traits and characteristics of
              individuals. They often involve a series of questions or scenarios
              that are designed to reveal patterns in thoughts, feelings, and
              behaviors. These tests can provide insights into an individual's
              personality traits, strengths, weaknesses, and preferences.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Cognitive Ability Tests</strong>
            <p>
              Measure mental processes like memory, reasoning, and
              problem-solving.Cognitive ability tests evaluate different
              cognitive functions and mental processes to determine how well
              individuals can think, learn, and apply knowledge. These tests are
              used in various settings, including educational assessments,
              employment screening, and psychological evaluations.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Emotional IQ Tests</strong>
            <p>
              Evaluate your ability to perceive, control, and express
              emotions.Emotional IQ tests assess various aspects of emotional
              intelligence, including how well individuals can perceive,
              understand, and manage their own emotions and the emotions of
              others. These tests aim to provide insights into how emotional
              skills contribute to personal and professional interactions.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Behavioral Assessments</strong>
            <p>
              Analyze patterns of behavior to understand how they affect your
              daily life and relationships.Behavioral assessments are systematic
              methods used to observe, measure, and analyze behavior. They aim
              to identify specific behaviors, their triggers, and their
              consequences, helping to understand how these behaviors impact an
              individual’s daily life and relationships.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Mood Disorder Evaluations</strong>
            <p>
              Screen for conditions like depression, anxiety, and bipolar
              disorder.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Stress and Coping Tests</strong>
            <p>
              Assess how you respond to stress and the effectiveness of your
              coping mechanisms.
            </p>
          </li>
        </div>
      </div>

      <section id="interactive-test">
        <h2 id="all-types-test1">Take a Quick Test</h2>
        <form>
          <label for="q1">
            I find it easy to understand other people's emotions
            <span>
              <i class="ri-emotion-line"></i>
            </span>
          </label>
          <select id="q1">
            <option value="1">Strongly Disagree</option>
            <option value="2">Disagree</option>
            <option value="3">Neutral</option>
            <option value="4">Agree</option>
            <option value="5">Strongly Agree</option>
          </select>
          <br />
          <label for="q2">
            I often feel overwhelmed by my emotions
            <span>
              <i class="ri-emotion-line"></i>
            </span>
          </label>
          <select id="q2">
            <option value="1">Strongly Disagree</option>
            <option value="2">Disagree</option>
            <option value="3">Neutral</option>
            <option value="4">Agree</option>
            <option value="5">Strongly Agree</option>
          </select>
          <br />
          <input id="submit-btn" type="submit" value="Submit" />
        </form>
      </section>

      <section id="resources">
        <h2>Recommended Resources</h2>
        <div class="videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3FIZwdzxNB4?si=IXfmcwh9rlqurDuE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Nz9eAaXRzGg?si=J_IfUEPezm2g72el"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/LnJwH_PZXnM?si=hdtcS7q2y3dtOB13"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vPvIxwh9N2w?si=D1gElBmqa3KKvoYg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vpO_3ZegQL4?si=WrWeKVSENC8NETqO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xRcWlA1I9z0?si=9ugkUHQW66rhnnK0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <footer>
        <div class="footer">
          <div class="row">
            <Link to="#">
              <i class="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i class="fa fa-instagram"></i>
            </Link>
            <Link to="#">
              <i class="fa fa-youtube"></i>
            </Link>
            <Link to="#">
              <i class="fa fa-twitter"></i>
            </Link>
          </div>
          <br />
          <br />
          <div class="row">
            <ul>
              <li>
                <Link to="#">Contact us</Link>
              </li>
              <li>
                <Link to="#">Our Services</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#">Career</Link>
              </li>
            </ul>
          </div>

          <div class="row">
            Copyright © 2024 MINDEASE - All rights reserved || Designed By:
            Kanwalpreet Singh & Jasmeen Singh
          </div>
        </div>
      </footer>
    </>
  );
};

export default Physical;
