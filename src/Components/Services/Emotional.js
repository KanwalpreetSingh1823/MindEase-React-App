import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Emotional = () => {
  useEffect(() => {
    const typed = new Typed(".textline", {
      strings: ["Anxiety", "Depression", "Anger and Irritability"],
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
                Emotional Tests = <span class="textline"></span>
              </h1>
              <p>
                Emotional problems refer to difficulties in managing emotions
                that can impact an individual's mental health, behavior, and
                overall quality of life.Here are some common emotional problems
                and how they affect mental health:
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
          <img src="/Frontend/assets/emotional/img1.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/emotional/img2.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/emotional/img3.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/emotional/img4.jpg" alt="Stress" />
        </div>
      </div>
      {/* </marquee> */}

      <h2 id="all-types-test">Types of Psychological Tests</h2>

      <div class="test">
        <div class="test">
          <li>
            <strong>Anxiety</strong>
            <p>
              Description: Anxiety is a feeling of worry, nervousness, or fear
              that is often excessive or irrational. It can be a reaction to
              stress or a trigger for various mental health disorders, including
              generalized anxiety disorder (GAD), social anxiety disorder, and
              panic disorder. Symptoms: Excessive worry or fear about everyday
              situations Restlessness, irritability, and difficulty
              concentrating Physical symptoms like sweating, trembling, rapid
              heartbeat, and shortness of breath
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Depression</strong>
            <p>
              Description: Depression is a mood disorder characterized by
              persistent feelings of sadness, hopelessness, and a lack of
              interest or pleasure in activities. It can affect thoughts,
              feelings, and behaviors and may lead to various emotional and
              physical problems. Persistent sadness or low mood Loss of interest
              in activities once enjoyed Changes in appetite and sleep patterns,
              fatigue, and feelings of worthlessness or guilt Difficulty
              concentrating and making decisions, thoughts of death or suicide
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Emotional Numbness</strong>
            <p>
              Description: Emotional numbness is a reduced ability to feel
              emotions, often as a coping mechanism for trauma or overwhelming
              stress. It is commonly associated with conditions like
              post-traumatic stress disorder (PTSD) or depression. Feeling
              disconnected or detached from oneself and others Lack of emotional
              response to positive or negative events Difficulty expressing
              emotions or empathy A sense of emptiness or feeling "flat"
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Grief and Loss</strong>
            <p>
              Description: Grief is a natural response to loss, such as the
              death of a loved one, a breakup, or losing a job. While grief is a
              normal process, prolonged or complicated grief can lead to
              significant emotional problems. Intense sadness, yearning, or
              longing for the lost person or situation Guilt, anger, or regret
              about the loss Difficulty accepting the reality of the loss
              Isolation or withdrawal from social activities
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Shame and Guilt</strong>
            <p>
              Description: Shame and guilt are powerful emotions that often
              result from perceived or actual wrongdoing or failure. They can
              lead to negative self-perception and impact mental health.
              Persistent feelings of worthlessness or inadequacy Obsessive
              thoughts about mistakes or perceived failures Withdrawal from
              others due to fear of judgment or rejection Self-punishing
              behaviors or self-sabotage Impact: Chronic shame and guilt can
              contribute to depression, anxiety, low self-esteem, and
              self-destructive behaviors. They can also hinder personal growth
              and social relationships.
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

export default Emotional;
