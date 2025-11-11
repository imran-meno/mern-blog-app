import { Link } from "react-router-dom";
import logo from "../assets/riseblog.png";
import html from '../assets/html.svg'
import css from  '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react.svg'
import mongoose from '../assets/mongoose.png'
import node from '../assets/node.png'
import express from '../assets/express.png'

function About() {
  return (
     <>
    <div className="main_about">
      <div className="white_about">
        <div className="white_content">   
        <h2>Hi</h2>
      <h2>I am Imran Khan</h2>
        <h3>MERN Stack Developer</h3>

        </div>
      </div>
      <div className="black_about">
      <div className="black_content">
      </div>
      </div>
    </div>
    
    <div className="detail_about">
      <div className="script_about">
       <p>I’m a passionate MERN Stack Developer dedicated to building clean, modern, and impactful web applications. I love transforming ideas into interactive digital experiences that help people and businesses grow online.</p>
      </div>
    </div>
      <div className="skills_main">

        <div className="skills">
           <h3>Skills</h3>

        </div>
      <div className="skills_logo">

        <div className="row_1">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
        </div>
         <div className="row_2">
            <img src={react} alt="react" />
            <img src={node} alt="node" />
            <img src={mongoose} alt="mongoose" />
          
        </div>

      </div>
      

      </div>

    </>

  
    
  );
}

export default About;
