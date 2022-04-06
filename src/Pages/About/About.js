import React from 'react'
import "./About.css"
import Coding from "../../assets/coding.svg"

function About() {
  return (
    <div className='about'>
        <img src={Coding}  className='myimage'/>
        <h1>About Full Stack Developer</h1>
        <div className='aboutdiv'>
            <h1>I'm Ömer</h1>
            <h3>I'm currently learning Full-Stack Development Languages.</h3>
            <h3>I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL, Python, AWS Services</h3>
            <h3><span style={{color : "white"}}>Send Email :</span> omerzemheri14@gmail.com</h3>
        </div>
    </div>
  )
}

export default About