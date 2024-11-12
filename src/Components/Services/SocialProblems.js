import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./dashboard.css";

const SocialProblems = () => {
  useEffect(() => {
    const typed = new Typed(".textline", {
      strings: [
        "Poverty and Financial Stress",
        " Discrimination and Stigma",
        "Social Isolation and Loneliness",
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
                Social Problems Tests = <span class="textline"></span>
              </h1>
              <p>
                Social problems can significantly impact mental health in
                various ways, affecting individuals' emotional well-being,
                behavior, and overall quality of life. These problems often
                create stress, anxiety, depression.
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
          <img src="/Frontend/assets/social/img1.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/social/img2.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/social/img3.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/social/img4.jpg" alt="Stress" />
        </div>
      </div>
      {/* </marquee> */}

      <h2 id="all-types-test">Types of Psychological Tests</h2>

      <div class="test">
        <div class="test">
          <li>
            <strong>Discrimination and Stigma</strong>
            <p>
              Impact: Psychological Distress: Experiencing discrimination and
              stigma due to race, gender, sexual orientation, or disability can
              lead to increased stress, anxiety, and depression. Internalized
              Negative Beliefs: Repeated exposure to discrimination can lead
              individuals to internalize negative beliefs about themselves,
              lowering self-esteem and contributing to feelings of worthlessness
              or shame. Barriers to Seeking Help: Stigma associated with certain
              identities or conditions can prevent people from seeking mental
              health care, leading to untreated mental health issues and
              worsening outcomes.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Bullying and Harassment</strong>
            <p>
              Trauma and Anxiety: Victims of bullying and harassment, whether
              in-person or online, often experience trauma, anxiety, and fear.
              This can lead to long-term psychological effects such as
              post-traumatic stress disorder (PTSD) and depression. Social
              Withdrawal: Repeated bullying or harassment can cause individuals
              to withdraw from social interactions and activities, leading to
              increased feelings of isolation and loneliness. Self-Harm and
              Suicidal Thoughts: In severe cases, bullying and harassment can
              lead to self-harm behaviors and suicidal ideation, particularly
              among adolescents and young adults.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Relationship Problems</strong>
            <p>
              Emotional Disturbance: Conflict, infidelity, or breakdown in
              relationships can cause significant emotional pain, leading to
              depression, anxiety, and low self-esteem. Negative Coping
              Mechanisms: Individuals facing relationship problems may turn to
              negative coping mechanisms like substance abuse, further affecting
              their mental health. Lack of Support: Troubled relationships often
              result in a lack of emotional support, which is crucial for coping
              with stress and adversity. This absence can exacerbate feelings of
              loneliness and increase vulnerability to mental health disorders.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Workplace Stress and Unemployment</strong>
            <p>
              Stress and Burnout: High-pressure work environments, lack of job
              security, and poor work-life balance can lead to chronic stress
              and burnout, which are risk factors for anxiety, depression, and
              other mental health issues. Financial Insecurity: Unemployment
              often results in financial insecurity, which compounds stress and
              anxiety, negatively impacting mental health. Loss of Identity and
              Purpose: Unemployment or underemployment can affect a person's
              sense of identity, self-worth, and purpose, leading to feelings of
              inadequacy and depression.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Family Conflict and Domestic Violence</strong>
            <p>
              Emotional Trauma: Exposure to domestic violence and family
              conflict can cause emotional trauma, leading to mental health
              conditions such as PTSD, anxiety, and depression. Developmental
              Issues in Children: Children who witness or experience domestic
              violence may have developmental and behavioral issues, including
              anxiety, depression, and difficulty forming healthy relationships
              later in life. Cycle of Abuse: Victims of domestic violence may
              struggle with self-esteem and self-worth, making it harder to
              leave abusive situations and increasing the risk of developing
              complex mental health disorders.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Social Media and Cyberbullying</strong>
            <p>
              Comparison and Low Self-Esteem: Excessive use of social media can
              lead to negative self-comparison and low self-esteem, particularly
              among adolescents and young adults. This can contribute to anxiety
              and depression. Cyberbullying: Online harassment or bullying can
              have severe psychological effects, including depression, anxiety,
              and suicidal thoughts. Sleep Disruption: Overuse of social media,
              particularly late at night, can disrupt sleep patterns,
              contributing to poor mental health.
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

export default SocialProblems;
