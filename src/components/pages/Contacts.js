import React from 'react';
import '../../App.css';

export default function Contacts() {
  return <>
   <div id="contact" class="container-fluid pt-5">
     <div class="container mx-auto text-center p-3 contact-container">
       <h2 d-inline-block><b>Contact Me</b></h2>
       <div class="row p-0">
       <div class="col-sm-6">
       
        <form action="/action_page.php" class="was-validated mt-5">
          <div class="form-group">
            <input type="text" class="form-control" id="name" placeholder="Your Name" name="name" required/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          
          <div class="form-group">
            <input type="text" class="form-control" id="subject" placeholder="Your Subject" name="subject" required/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
         
          <div class="form-group">
            <input type="email" class="form-control" id="E-mail" placeholder="Your E-mail" name="E-mail" required/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          
          <div class="form-group">
            <textarea class="form-control" id="text-area" rows="3" placeholder="Your Message" name="text-area" required></textarea>
          </div>
         
          <button type="submit" class="btn contact_btn_style">Submit</button>
        </form>
        
       </div>
       
       <div class="col-sm-6 pt-5">
        <h5>Phone-No.</h5>
        <p>7602034111</p>
        <h5>Email</h5>
        <p>anushkasinghkgp@gmail.com</p>
      </div>
     </div>
    </div>
  </div>
</>
}
