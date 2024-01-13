import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import VisitUs from "../../Components/VisitUs";
import Header from "../../Nainital/Header";


const OtpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    city: "",
    captchaInput: "",
  });
  const [captchaText, setCaptchaText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Generate initial captcha text on component mount
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890qwertyuiopasdfghjklzxcvbnm';
    var captcha = '';
    for (var i = 0; i < 6; i++) {
      captcha += alpha[Math.floor(Math.random() * alpha.length)];
    }
    setCaptchaText(captcha);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the entered captcha matches the generated captchaText
    const isCaptchaValid = captchaText === formData.captchaInput;

    if (!isCaptchaValid) {
      console.error("Captcha validation failed");
      alert("Please enter a valid captcha");
      return;
    }

    try {
      await axios.post("https://tzbe.vercel.app/lead", formData);

      navigate("/spin/next");
      console.log("Form data submitted:", formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
    <Header/>
      <div className=" pt-[3vh] lg:pt-[10vh]   flex items-center justify-center ">
        <div className=" flex flex-col  lg:flex-row w-[86vw] mx-auto ">
        <div className="text-[36px] h-[155px]  lg:h-[482px]    px-[3vw] pb-[4vw] font-medium w-full bg-cover   lg:max-w-[740px] bg1  flex flex-col justify-end  items-center lg:items-start  gap-3">
          <div className="flex"><p className="text-white text-[36px] lg:text-[48px] ">Thrill - </p>
          <img src="./wheel.png" className=" h-[56px] w-[56px] lg:h-[68px] lg:w-[68px]" />
          <p className="text-white text-[36px] lg:text-[48px]"> - Spin </p>
          </div>
          <p className="text-white  hidden lg:block  font-medium text-[36px]  ">
            Win Exciting Discount Coupons on Rafting Trips
          </p>
        </div>
        <div className=" block lg:hidden w-full  mx-auto mt-2 ">
        <p className="text-primary text-center  font-medium text-[24px]  ">
            Win Exciting Discount Coupons on Rafting Trips
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="   flex items-center justify-center w-full lg:min-w-[492px] sm:h-[482px] pt-7  lg:pt-0    text-[#454545]   "
        >
          <div className=" w-[400px] mx-auto   ">
          <h1 className=" text-[16px] mb-4 font-semibold  ">Enter Details</h1>
          <div className="mb-4  ">
            
            <label htmlFor="name" className="block pl-2  ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-black h-[40px] rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block pl-2 ">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-black h-[40px] border rounded-md"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="city" className="block  pl-2 ">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-black h-[40px] border rounded-md"
              required
            />
          </div>

          <div className="mb-16 sm:mb-4 flex flex-col gap-y-4 sm:flex-row justify-between h-[40px] ">
            <div className="flex items-center justify-center  text-[#222222] h-[40px] py-4 px-3 w-full sm:w-[164px] rounded-md bg-[#dddddd] "  >
              <label htmlFor="captchaInput" className="block text-2xl" >
              {captchaText}
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter Captcha"
              id="captchaInput"
              name="captchaInput"
              value={formData.captchaInput}
              onChange={handleChange}
              className=" p-2 w-full sm:w-[200px] border-black h-[40px] border rounded-md"
              required
            />
          </div>

          <div className=" flex sm:justify-start justify-center ">
            <button
              type="submit"
              className="bg-[#57BEBE] text-white px-4 py-2 mt-6 rounded-2xl w-[200px] "
            >
              Submit
            </button>
          </div>
          </div>
        </form>
        </div>
        {/* <VisitUs /> */}
      </div>

    </>
  );
};

export default OtpPage;
