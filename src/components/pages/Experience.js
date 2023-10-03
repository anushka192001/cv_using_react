import React from 'react';
import '../../App.css';

export default function Experience() {
  return <>
  <video src='/videos/video-2.mp4' autoPlay loop muted />
  <div id="experience" class="container mt-5 text-center">
      <h3 class="mb-3">Experience</h3>
      <div class="card shadow-lg bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>March 2020 - Present</span>
              <h5>Software Team Member</h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>SWARM ROBOTICS SOCIETY IIT KHARAGPUR</h5>
              <p>developed new website of swarm robotics</p>
            </div>
        </div>
      </div> 
      
      
      <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>NOVEMBER 2021-JULY 2022</span>
              <h5>Machine learning Research Project </h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>Mc GILL UNIVERSITY ,CANADA</h5>
              <p>worked on machine learning research project to detect alzhiemer with atleast 88% accuracy</p>
            </div>
        </div>
       </div> 
       
       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>FEBRUARY 2022-NOVEMBER 2022</span>
              <h5>Machine learning Research Project </h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>GEORGIA TECH FINANCIAL INNOVATION LAB ,U.S.A </h5>
              <p>written an efficient code to automatically download financial data (audio and video)of nasdaq 100 companies and development of week supervision model 
              to detect inclaim sentences with that of competitive accuracy as that of complex models like bert</p>
            </div>
        </div>
       </div> 

       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>JULY 2022-DEC 2022</span>
              <h5>BTP-1 </h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>IIT kharagpur(under prof Rajib Mall,department of CSE,IIT kharagpur)</h5>
              <p>create a deep learning model to generate code property graphs of code files(only javs files) and use it furthur to find attackable vulnerabilities in codes and must help in numerious software tasks such as autocorrect, code completion, buffer overflows etc.</p>
            </div>
        </div>
       </div> 


       <div class="card shadow-lg mb-5 bg-white rounded mb-2">
        <div class="card-body row p-0">
            <div class="col-sm-3 p-4 experience_style">
            <span>JAN 2023-MAY 2023</span>
              <h5>BTP-2</h5>
            </div>
            <div class="col-sm-9 p-4"> 
              <h5>IIT kharagpur(under prof Debasis Samanta,department of CSE,IIT kharagpur)</h5>
              <p>development of speller interface for handicapped people by using the concept of brain signals corrosponding to colors.</p>
            </div>
        </div>
       </div> 

        </div>
</>
}
