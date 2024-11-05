import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Physical = () => {
  useEffect(() => {
    const typed = new Typed(".textline", {
      strings: ["Tension Head", "Multiple Sclerosis", "Tension Headaches "],
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
                Physical health problems related to the mind, often referred to
                as neurological and psychosomatic disorders, involve conditions.
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
          <img src="/Frontend/assets/problem/img1.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/problem/img2.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/problem/img3.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/problem/img4.jpg" alt="Stress" />
        </div>
      </div>
      {/* </marquee> */}

      <h2 id="all-types-test">Types of Psychological Tests</h2>

      <div class="test">
        <div class="test">
          <li>
            <strong>Neurological Disorders</strong>
            <p>
              Stroke: A sudden interruption of blood supply to the brain,
              causing brain cells to die. It can result in physical symptoms
              like weakness, paralysis, and difficulty speaking or understanding
              language, as well as cognitive and emotional changes. Epilepsy: A
              disorder characterized by recurrent seizures due to abnormal
              electrical activity in the brain. Physical symptoms can include
              convulsions, loss of consciousness, and muscle stiffness or
              twitching.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Psychosomatic Disorders</strong>
            <p>
              These are physical illnesses or symptoms that are thought to arise
              from emotional or mental factors. The mind can affect the body in
              ways that lead to physical symptoms. Chronic Pain Disorders :
              Conditions like fibromyalgia and chronic fatigue syndrome, where
              pain and fatigue are linked to psychological stress and emotional
              states. Tension Headaches and Migraines : Severe headaches often
              triggered by stress, anxiety, or depression, resulting in intense
              physical pain.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Sleep Disorders</strong>
            <p>
              Insomnia: Difficulty falling or staying asleep, which can lead to
              fatigue, concentration problems, and mood disturbances. Sleep
              Apnea: A condition where breathing repeatedly stops and starts
              during sleep, leading to poor sleep quality and increased risk of
              cardiovascular issues.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Somatoform Disorders</strong>
            <p>
              Insomnia: Difficulty falling or staying asleep, which can lead to
              fatigue, concentration problems, and mood disturbances. Sleep
              Apnea: A condition where breathing repeatedly stops and starts
              during sleep, leading to poor sleep quality and increased risk o
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Cerebral Palsy</strong>
            <p>
              Cerebral Palsy: A group of disorders affecting a person’s ability
              to move and maintain balance and posture. Caused by abnormal brain
              development or damage to the developing brain, it can lead to a
              range of physical symptoms, including spasticity (stiff muscles),
              dystonia, and coordination issues. Cognitive impairments and
              mental health challenges can also be associated.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Brain Tumors</strong>
            <p>
              Primary Brain Tumors: Tumors that originate in the brain and can
              affect cognitive function, coordination, balance, and other
              neurological functions depending on their location and size.
              Symptoms can include headaches, seizures, and changes in mental
              function or personality.
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
