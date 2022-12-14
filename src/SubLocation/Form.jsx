import React from 'react';
import './Form.css'

function Form() {
  return (
    <div className="form_Container">
      <h1>Customize your package</h1>
      <p>We will help you in creating your personal package.
        Fill this form and we will connect with you soon!</p>
     <div className="input_div_form">
     <input type="text" name="input" placeholder="Full Name*"></input>
      <input type="text" name="mobile" placeholder="Mobile Number*"></input>
      <input type="email" name="input" placeholder="Email Id*"></input>
      <input type="text" name="input" placeholder="Trip date- dd/mm/yyyy"></input>
      <input type="number" name="input" placeholder="Number of People*"></input>
      <input type="submit" name="submit" value="Send"></input>
     </div>
    </div>
  )
}

export default Form