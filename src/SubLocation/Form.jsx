import React, { useState } from 'react';
import './Form.css';
import db from '../firebase';
import firebase from "firebase";
function Form() {
  const [formData, setFormData] = useState({name: "",email: "",mobile: "",tripDate:"none",travellers:0});
  const [messageToggle, setMessageToggle] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

   const handleSubmit = (event) => {
    event.preventDefault();
    var timestmp = firebase.firestore.FieldValue.serverTimestamp();
    if(formData.name === "" || formData.email === "" || formData.mobile === "" || formData.travellers === 0){
      alert("Please fill all the fields");
      return;
    }
    db.collection('Leads').doc(formData.email,timestmp).set({
      client_name: formData.name,
      client_email: formData.email,
      client_mobile: formData.mobile,
      trip_date: formData.tripDate,
      number_of_travellers: formData.travellers,
      timestamp: timestmp,
    });
    setFormData({name: "",email: "",mobile: "",tripDate:"none",travellers:0});
    setMessageToggle(true);
    setInterval(()=>{setMessageToggle(false)}, 2000)
   
};

  return (
    <div className="form_Container">
      <h1>Customize your package</h1>
      <p>We will help you in creating your personal package.
        Fill this form and we will connect with you soon!</p>
     <div className="input_div_form">
     <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name*" required></input>
      <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number*" required></input>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Id*" required></input>
      <input type="date" id="tripDate" name="tripDate" value={formData.tripDate} onChange={handleChange}  placeholder="Trip date- dd/mm/yyyy"></input>
      <input type="number" name="travellers" id="travellers" value={formData.travellers} placeholder="Number of People*" onChange={handleChange} ></input>
      {messageToggle && <span className="thankyou__span">Thank you! We shall contact you soon!</span>}
      <input type="submit" name="submit" value="Send" onClick={handleSubmit} required></input>
     </div>
    </div>
  )
}

export default Form