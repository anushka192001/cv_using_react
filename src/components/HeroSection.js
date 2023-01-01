import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/the_boat.mp4' autoPlay loop muted />
      <div className="img-profile">
      <img src="images/profile_photo.jpeg" className="rounded-circle profile_style" alt="anushka"/>
      </div>
      <h1>ANUSHKA SINGH</h1>
      <p>Hello! I am Anushka Singh.

4th year undergraduate btech student at IIT kharagpur

,proficient in web development , machine learning

looking for opportuanities in technical skills like web development
or data science to use my skills and be productive each time</p>
     
    </div>
  );
}

export default HeroSection;
