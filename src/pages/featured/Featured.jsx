import { ReactTyped } from "react-typed"
import "./Featured.css"


import React from 'react'

function Featured() {
 


  return (

    
    <section className="featured-box" id="home">
      
  <div className="featured-text">
    <div className="featured-text-card">
      <span>John Doe</span>
    </div>
    <div className="featured-name">
      <p>
        
        I'm <span className="typedText" />
        <ReactTyped strings={["Designer","Youtuber","Developer"]} typeSpeed={40} />
      </p>
    </div>
    <div className="featured-text-info">
      <p>
        Experienced frontend developer with a passion for creating visually
        stunning and user-friendly websites.
      </p>
    </div>
    <div className="featured-text-btn">
      <button className="btn blue-btn">Hire Me</button>
      <button className="btn">
        Download CV <i className="uil uil-file-alt" />
      </button>
    </div>
    <div className="social_icons">
      <div className="icon">
        <i className="uil uil-instagram" />
      </div>
      <div className="icon">
        <i className="uil uil-linkedin-alt" />
      </div>
      <div className="icon">
        <i className="uil uil-dribbble" />
      </div>
      <div className="icon">
        <i className="uil uil-github-alt" />
      </div>
    </div>
  </div>
  <div className="featured-image">
    <div className="image">
      
      <img src="./assets/images/1.png" alt="avatar" />
    </div>
  </div>
  <div className="scroll-icon-box">
    <a href="#about" className="scroll-btn">
      <i className="uil uil-mouse-alt" />
      <p>Scroll Down</p>
    </a>
  </div>
</section>

  )
}

export default Featured