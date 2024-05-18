import "./About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react'

function About() {

  let frontEnd = [
    {name:"HTML"} , {name:"JAVASCRIPT"} , {name:"CSS"} ,{name:"Bootstrap"} , {name:"React"} , {name:"Angular"}
  ];

  let backEnd = [
    {name:"PHP"} , {name:"ExpressJS"}
  ];

  let dataBase = [
    {name:"SQL"} , {name:"MONGODB"}
  ];

  AOS.init(); // andha 3ala9a b animation wkhssni ndkhol site smyto https://michalsnik.github.io/aos/

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
          {/* this map about adding skills in my experience frontEnd */}
        {
          frontEnd.map(el=>
              <span>{el.name}</span>
            )
          
        }

        </div>
      </div>
      <div className="skills-box">
        <div className="skills-header">
          <h3>Backend</h3>
        </div>
        <div className="skills-list">
        {/* this place about adding my experience with backend */}
        {
          backEnd.map(elBack=>
            <span>{elBack.name}</span>
          )
        }
        </div>
      </div>
      <div className="skills-box">
        <div className="skills-header">
          <h3>Database</h3>
        </div>
        <div className="skills-list">
  {/* this place about adding my experience with Database */}
        {
          dataBase.map(elData =>
            <span>{elData.name}</span>
          )
        }
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default About