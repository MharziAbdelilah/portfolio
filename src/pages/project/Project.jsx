import "./Project.css"

import React from 'react'

function Project() {
  return (
    <section className="section" id="projects">
  <div className="top-header">
    <h1>Projects</h1>
  </div>
  <div className="project-container">
    <div className="project-box">
      <i className="uil uil-briefcase-alt" />
      <h3>Completed</h3>
      <label>15+ Finished Projects</label>
    </div>
    <div className="project-box">
      <i className="uil uil-users-alt" />
      <h3>Clients</h3>
      <label>25+ Happy Clients</label>
    </div>
    <div className="project-box">
      <i className="uil uil-award" />
      <h3>Experience</h3>
      <label>7+ Years in the field</label>
    </div>
  </div>
</section>

  )
}

export default Project