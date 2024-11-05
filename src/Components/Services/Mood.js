import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Mood = () => {
  useEffect(() => {
    const typed = new Typed(".textline", {
      strings: [
        "Loss Of Intrest",
        "Feelings of Worthlessness",
        "Loss Of Energy ",
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
                Mood Tests = <span class="textline"></span>
              </h1>
              <p>
                Mood disorders are a category of mental health conditions that
                primarily affect a person’s emotional state. These disorders can
                vary in severity and duration.
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
          <img src="/Frontend/assets/moods/img1.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/moods/img2.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/moods/img3.jpg" alt="Stress" />
        </div>
        <div class="image">
          <img src="/Frontend/assets/moods/img4.jpg" alt="Stress" />
        </div>
      </div>
      {/* </marquee> */}

      <h2 id="all-types-test">Types of Psychological Tests</h2>

      <div class="test">
        <div class="test">
          <li>
            <strong>Major Depressive Disorder (MDD)</strong>
            <p>
              Persistent sad or "empty" mood Loss of interest or pleasure in
              activities once enjoyed Significant weight loss or gain, or
              changes in appetite Fatigue or loss of energy Feelings of
              worthlessness or excessive guilt Difficulty thinking,
              concentrating, or making decisions Recurrent thoughts of death or
              suicide Impact: Major depressive disorder can severely impact
              daily life, relationships, and work or school performance. It can
              also lead to physical health problems, such as heart disease or
              weakened immune function, due to chronic stress and poor
              self-care.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Psychotic Depression</strong>
            <p>
              Description: A severe form of depression that occurs when a person
              has depressive episodes with psychotic symptoms, such as
              hallucinations or delusions. These psychotic features often have a
              depressive theme, such as delusions of guilt, poverty, or illness.
              Symptoms: Depressive symptoms, including deep sadness,
              hopelessness, and fatigue Psychotic symptoms, such as delusions or
              hallucinations, often related to feelings of worthlessness or
              guilt Impact: Psychotic depression can be highly debilitating,
              increasing the risk of suicide and requiring intensive treatment,
              often including both antidepressants and antipsychotic
              medications.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Adjustment Disorder with Depressed Mood</strong>
            <p>
              Description: A mood disorder that occurs in response to a
              significant life stressor or change (e.g., divorce, job loss,
              death of a loved one). Unlike major depressive disorder, the
              symptoms are usually temporary and directly related to the
              external event. Symptoms: Low mood, sadness, and tearfulness
              Feelings of hopelessness or being overwhelmed
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Double Depression</strong>
            <p>
              Double depression occurs when a person with persistent depressive
              disorder (dysthymia) experiences an episode of major depressive
              disorder (MDD). The chronic low mood of dysthymia can make the
              person more vulnerable to major depressive episodes. Symptoms:
              Symptoms of persistent depressive disorder, such as low
              self-esteem, fatigue, and chronic sadness More intense depressive
              symptoms typical of major depressive disorder, like severe
              fatigue, loss of interest in daily activities, significant weight
              changes, and thoughts of suicide during episodes Impact:
              Individuals with double depression often experience more severe
              symptoms and greater impairment in daily functioning than those
              with either condition alone. Treatment may require a combination
              of psychotherapy and medication.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Mood Disorder Due to a General Medical Condition</strong>
            <p>
              Description: Mood disturbances caused directly by the
              physiological effects of a general medical condition (such as
              hypothyroidism, chronic pain, or neurological disorders). The mood
              changes are a direct result of the medical condition and not due
              to a primary mood disorder. Symptoms: Depressive or manic symptoms
              linked to the underlying medical condition Symptoms that improve
              with treatment of the medical condition Examples of medical
              conditions that can cause mood disorders include Parkinson’s
              disease, stroke, multiple sclerosis, thyroid disorders, and
              chronic fatigue syndrome Impact: These mood disorders can
              complicate the management of the underlying medical condition and
              affect a person's overall quality of life. Effective management
              often requires treating both the medical condition and the mood
              symptoms.
            </p>
          </li>
        </div>

        <div class="test">
          <li>
            <strong>Depressive Disorders Due to Substance Withdrawal</strong>
            <p>
              Description: Mood disturbances, particularly depressive symptoms,
              that occur during withdrawal from substances such as alcohol,
              opioids, or benzodiazepines. The depressive symptoms are directly
              related to the physiological withdrawal process. Symptoms:
              Depressed mood, anhedonia (loss of pleasure), and fatigue Anxiety,
              irritability, and restlessness Physical symptoms related to
              withdrawal, such as tremors, sweating, and nausea Impact:
              Depression during withdrawal can complicate the recovery process,
              increase the risk of relapse, and may require medical and
              psychological support.
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

export default Mood;
