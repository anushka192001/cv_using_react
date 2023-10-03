import React from 'react';
import '../../App.css';

export default function Projects() {
  return <>
  <video src='/videos/water_fall.mp4' autoPlay loop muted />
  <div id="projects" class="container mt-5 text-center">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-header"><h4>Projects</h4></div>
        <div class="card-body">
          <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" class="active"></li>
              <li data-target="#demo" data-slide-to="1" ></li>
              <li data-target="#demo" data-slide-to="2"></li>
              <li data-target="#demo" data-slide-to="3"></li>
              <li data-target="#demo" data-slide-to="4"></li>
              <li data-target="#demo" data-slide-to="5"></li>
              <li data-target="#demo" data-slide-to="6"></li>
             
            </ul>
            <div class="carousel-inner">
            

            <div class="carousel-item active">
                <img src="images/greeting-cards.jpg" alt="greeting-cards-aplication" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>Greeting cards Application</h3>
                  <p>made a full stack project of greeting cards application</p>
                  <p><a href="https://github.com/anushka192001/TO_DO_LIST">link</a></p>
              </div>
              </div>
            
              <div class="carousel-item">
                <img src="images/project_3_img.jpg" alt="to-do-list" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>TO DO LIST</h3>
                  <p>made a TO_DO_LIST responsive application using javascript,node.js,express,mongoose,mongodb,css,html bootstrap.</p>
                  <p><a href="https://github.com/anushka192001/TO_DO_LIST">link</a></p>
              </div>
              </div>
              
              <div class="carousel-item">
                <img src="images/project_4_img.jpg" alt="blog-website" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>BLOG WEBSITE</h3>
                  <p>made a blog website using javascript,node.js,express,js etc.</p>
                  <p><a href="https://github.com/anushka192001/blog-website">link</a></p>
              </div>
              </div>
        

              <div class="carousel-item">
                <img src="images/project_5_img.jpg" alt="simon-game" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>MEMORY GAME</h3>
                  <p>created using css javascript,jquery,html,bootstrap (mobile,ipad,laptop responsive game. play game https://anushka192001.github.io/memory-game/</p>
                  <p><a href="https://github.com/anushka192001/simon-game">link</a></p>
                </div>
              </div>


              <div class="carousel-item">
                <img src="images/project_6_img.jpg" alt="alzeimer-detection" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>ALZHEIMER DETECTION BY RATINA OCT SCANS USING MACHINE LEARNING</h3>
                  <p>did a research project under professor DANILO BZDOK(Mc Gill University ,Canada)</p>
                  <p><a href="https://github.com/anushka192001/OCT_ratina_images_to_alzheimer_prediction">link</a></p>
                </div>
              </div>


              <div class="carousel-item">
                <img src="images/project_7_img.jpg" alt="sec-edgar-data-analysis" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>SEC-EDGAR DATA ANALYSIS</h3>
                  <p> Download Data from the SEC-EDGAR and do Rudimentary Sentiment Analysis on it.
                   wrote a code to download the SEC-EDGAR data <br/>wrote a code to plot the graph between <br/>1.)sentiment polarity score vs quartor<br/> 2.)sentiment polarity score vs year ,saved and added those graphs here.</p>
                  <p><a href="https://github.com/anushka192001/SEC_EDGAR_data_analysis">link</a></p>
                </div>
              </div>


              <div class="carousel-item">
                <img src="images/project_8_img.jpg" alt="bot-design" class="carousel_style"/>
                <div class="carousel-caption carousel_caption_bg_color">
                  <h3>ROBOTICS MECHANICAL BOT DESIGN</h3>
                  <p><a href="https://github.com/anushka192001/swarm_robotics_bots_mechanical_design">link</a></p>
                </div>
              </div>


            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
          
       </div> 
      </div>
    </div>
     
   
</>
}
