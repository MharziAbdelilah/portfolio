
import { useState } from "react";
import "./Header.css";

function Header() {

  const [activeLink , setActiveLink] = useState("home");

  const handelLink = (link) =>{
    setActiveLink(link)
  }

  function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Abdelilah</p>
        <span>.</span>
      </div>
      <div className="nav-menu"  id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className={`nav-link ${activeLink === "home" ? "active-link" : ""}`} onClick={() => {handelLink("home")}}>
              Home
            </a>
            <div className="circle" />
          </li>
          <li className="nav_list">
            <a href="#about" className={`nav-link ${activeLink === "about" ? "active-link" : ""}`} onClick={() => handelLink("about")}>
              About
            </a>
            <div className="circle" />
          </li>
          <li className="nav_list">
            <a href="#projects"className={`nav-link ${activeLink ==="projects" ? "active-link" : "" }`} onClick={()=> handelLink("projects")}>
              Projects
            </a>
            <div className="circle" />
          </li>
          <li className="nav_list">
            <a href="#contact" className={`nav-link ${activeLink ==="contact" ? "active-link" : "" }`} onClick={()=> handelLink("contact")}>
              Contact
            </a>
            <div className="circle" />
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn">
          Download CV <i className="uil uil-file-alt" />
        </button>
      </div>
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={myMenuFunction} />
      </div>
    </nav>
  );
}

export default Header;
