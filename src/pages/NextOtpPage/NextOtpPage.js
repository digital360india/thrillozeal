import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import VisitUs from "../../Components/VisitUs";
import Header from "../../Nainital/Header";

const NextOtpPage = () => {
  const [formData, setFormData] = useState({
    otp: "",
  });
  const navigate = useNavigate();
  const handleChange = (otpValue) => {
    setFormData({
      ...formData,
      otp: otpValue,
    });
  };
  const renderInput = (inputProps, index) => (
    <input
      key={index}
      {...inputProps}
      type="text"
      maxLength={1}
      style={{
        width: "1.4em",
        height: "2em",
        margin: "0 0.5em",
        fontSize: "1.5em",
        textAlign: "center",

        border: "1px solid #ccc",
        borderRadius: "4px",
        boxSizing: "border-box",
      }}
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
navigate("/spin/TandC")
    console.log("Form data submitted:", formData);
  };
  return (
    <>
     <Header/>
      <div className=" pt-[3vh] lg:pt-[10vh]   flex items-center justify-center ">
        <div className=" flex flex-col  lg:flex-row w-[86vw] mx-auto ">
        <div className="text-[36px] h-[155px]  lg:h-[482px]    px-[3vw] pb-[4vw] font-medium w-full bg-cover    lg:max-w-[740px] bg1  flex flex-col justify-end  items-center lg:items-start  gap-3">
          <div className="flex"><p className="text-white text-[36px] lg:text-[48px] ">Thrill - </p>
          <img src="/wheel.png" className=" h-[56px] w-[56px] lg:h-[68px] lg:w-[68px]" />
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
          className="   flex items-center justify-center w-full lg:min-w-[492px] h-[200px] lg:h-[482px] pt-7  lg:pt-0    text-[#454545]   "
        >
          <div className=" w-full sm:w-[400px] mx-auto   ">
          {/* <h1 className=" text-[16px] mb-4 font-semibold  ">Enter OTP sent to your Mobile Number</h1> */}
          <div className="mb-4 flex flex-col items-center sm:items-start ">
             <label htmlFor="otp" className="block mb-5">
            Enter OTP sent to your Mobile Number            </label>
           <OTPInput
              value={formData.otp}
              onChange={handleChange}
              numInputs={6}
              isInputNum
              inputStyle="inputStyle"
              containerStyle="containerStyle"
              inputClassName="inputClassName"
              focusStyle="focusStyle"
              disabled={false}
              shouldAutoFocus
              renderInput={renderInput}
            />
          </div>

          
          <div className=" flex justify-center sm:justify-start justify-center ">
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

export default NextOtpPage;
