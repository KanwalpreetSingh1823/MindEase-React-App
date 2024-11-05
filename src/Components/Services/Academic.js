import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Academic = () => {
  useEffect(() => {
    const typed = new Typed(".textline", {
      strings: [
        "Test Anxiety",
        "Poor Time Management and Procrastination|",
        "Learning Disabilities and Difficulties| ",
      ],
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
                Academic Tests = <span class="textline"></span>
              </h1>
              <p>
                Academic problems can significantly affect a student's mental
                health, emotional well-being and their potential impact on
                students:
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
          <img src="/Frontend/assets/academic/img1.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/academic/img2.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/academic/img3.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/academic/img4.jpg" alt="Stress" />
        </div>
      </div>
      {/* </marquee> */}

      <h2 id="all-types-test">Types of Psychological Tests</h2>

      <div class="test">
        <div class="test">
          <li>
            <strong>Learning Disabilities and Difficulties</strong>
            <p>
              Description: Learning disabilities are neurological disorders that
              affect a person’s ability to receive, process, or communicate
              information. Common types include dyslexia (difficulty with
              reading), dyscalculia (difficulty with math), and dysgraphia
              (difficulty with writing). Struggling to keep up with peers
              academically Difficulty with reading comprehension, spelling, or
              mathematical calculations Trouble with writing tasks or organizing
              thoughts Frequent frustration or anxiety related to schoolwork
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Test Anxiety</strong>
            <p>
              Description: Test anxiety is a form of performance anxiety that
              can cause significant distress and hinder a student's ability to
              perform well on exams. Physical symptoms like sweating, rapid
              heartbeat, nausea, and shaking before or during tests Negative
              thoughts, fear of failure, and self-doubt Difficulty concentrating
              or remembering studied material during the exam Panic attacks or
              feelings of dread related to testing situations
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Poor Time Management and Procrastination</strong>
            <p>
              Description: Many students struggle with managing their time
              effectively, leading to procrastination and last-minute stress.
              This issue is often linked to lack of motivation, organizational
              skills, or fear of failure. Constantly delaying or postponing
              assignments and study sessions Cramming for exams or rushing
              through assignments at the last minute Feeling overwhelmed by
              academic responsibilities and deadlines Difficulty balancing
              schoolwork with other activities or commitments.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Bullying and Peer Pressure</strong>
            <p>
              Description: Bullying and peer pressure in academic settings can
              negatively impact a student's mental health and academic
              performance. Bullying can be physical, verbal, or emotional, while
              peer pressure often involves being coerced into behaviors against
              one's values. Avoidance of school or certain classes due to fear
              of bullying Changes in mood, behavior, or academic performance
              Social withdrawal, loneliness, or feelings of rejection Increased
              anxiety, depression, or low self-esteem Impact: Bullying and peer
              pressure can lead to severe emotional distress, decreased academic
              motivation, and poorer school performance. In extreme cases, they
              can contribute to mental health disorders, suicidal thoughts, or
              school dropout.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>High Academic Pressure and Expectations</strong>
            <p>
              Description: Many students face intense pressure to achieve high
              academic standards from parents, teachers, or themselves. This
              pressure can create stress and anxiety, especially when
              expectations feel unattainable. Persistent worry about grades and
              academic performance Fear of disappointing parents, teachers, or
              oneself Perfectionism and excessive self-criticism Reduced
              interest in learning or loss of motivation due to fear of failure
              Impact: High academic pressure can lead to anxiety, depression,
              burnout, and reduced overall well-being. It may also cause
              students to engage in unhealthy behaviors, such as cheating,
              substance abuse, or neglecting self-care.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Inadequate Support and Resources</strong>
            <p>
              Description: Lack of adequate academic support, such as tutoring,
              counseling, or access to learning materials, can hinder a
              student's ability to succeed in school. This problem is often more
              pronounced in underfunded schools or for students with special
              needs. Struggling with academic content due to lack of guidance or
              resources Feeling unsupported or misunderstood by teachers or
              peers Difficulty completing assignments or preparing for exams
              without adequate tools or help Decreased motivation and engagement
              in academic activities Impact: Inadequate support can lead to
              frustration, academic underperformance, and feelings of
              helplessness or discouragement. It may also contribute to widening
              achievement gaps and decreased opportunities for higher education
              or career advancement.
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

export default Academic;
