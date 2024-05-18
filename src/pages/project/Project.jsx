import "./Project.css"

import React from 'react'

function Project() {

  const card = [
    {id:"briefcase" , title:"Completed" , label:"15+ Finished Projects"} ,
     {id:"users" , title:"Clients" , label:"25+ Happy Clients"},
      {id:"award" , title:"Experience" , label:"1+ Years in the field"}]
  return (
    <section className="section" id="projects">
  <div className="top-header">
    <h1>Projects</h1>
  </div>
  
  <div className="project-container">
{
  card.map(elCard =>{
    return (
    <div className="project-box">
    <i className={`uil uil-${elCard.id}-alt`}></i>
    <h3>{elCard.title}</h3>
    <label htmlFor="">{elCard.label}</label>
  </div>
  )})
}
  </div>
</section>

  )
}

export default Project