import React from 'react';
import "./About.css";
import {Typography} from "@mui/material"
import ProfileImage from "../../Images/Profilepic.jpeg";

const About = () => {
  return (
    <div className='about'>
        <div className="aboutContainer">
            <Typography>This is a sample quote</Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img src={ProfileImage} alt="Sachin" className='aboutAvatar' />
                <Typography variant='h4'>Sachin</Typography>
                <Typography>Full Stack Developer</Typography>
                <Typography>I am also a teacher and currier guide</Typography>
            </div>
            <div>
                <Typography style={{
                    wordSpacing:"5px",
                    lineHeight:"50px",
                    letterSpacing:"5px",
                    textAlign:"right",
                }}>This is description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nam esse doloribus nostrum debitis? Impedit error harum ea nam accusamus cumque recusandae enim saepe ad.</Typography>
            </div>
        </div>
    </div>
  )
}

export default About