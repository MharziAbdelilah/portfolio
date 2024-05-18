import "./About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'

function About() {

  AOS.init();

  return (
    <section className="section" id="about" data-aos="fade-up">
  <div className="top-header">
    <h1>About Me</h1>
  </div>
  <div className="row">
    <div className="col">
      <div className="about-info">
        <h3>My introduction</h3>
        <p>
          I am well-versed in HTML, CSS and JavaScript , and other cutting edge
          frameworks and libraries,which allows me to implement interactive
          features. Additionally, I have experirence working with content
          management systems (CMS) like WordPress.
        </p>
        <div className="about-btn">
          <button className="btn">
            Download CV <i className="uil uil-import" />
          </button>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="skills-box">
        <div className="skills-header">
          <h3>Frontend</h3>
        </div>
        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>JavaScript</span>
          <span>Vue</span>
          <span>React</span>
          <span>Angular</span>
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-header">
          <h3>Backend</h3>
        </div>
        <div className="skills-list">
          <span>PHP</span>
          <span>JAVA</span>
          <span>Python</span>
          <span>C++</span>
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-header">
          <h3>Database</h3>
        </div>
        <div className="skills-list">
          <span>MySQL</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About