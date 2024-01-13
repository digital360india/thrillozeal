import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Nainital/Header';

const TandC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleProceedClick = () => {
    if (isChecked) {
navigate("/spin/spinpage")
      console.log("Proceed button clicked!");
    } else {
      alert("Please agree to the terms and conditions.");
    }
  };

  return (
    <>
      <Header/>
      <div className=" pt-[3vh] lg:pt-[10vh]   fl ex items-center justify-center ">
        <div className=" flex flex-col  lg:flex-row w-[86vw] mx-auto ">
        <div className="text-[36px] h-[155px]  lg:h-[482px]    px-[3vw] pb-[4vw] font-medium w-full bg-cover   lg:max-w-[740px] bg1  flex flex-col justify-end  items-center lg:items-start  gap-3">
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
        <div
         
          className="   flex items-center justify-center w-full lg:min-w-[492px] sm:h-[482px] pt-7  lg:pt-0    text-[#454545]   "
        >
          <div className=" w-[400px] mx-auto   ">
          <h1 className="text-2xl font-bold mb-4 text-primary text-[24px]">Terms and Conditions</h1>
      <div className="bg-white">
        <p>1. Each participant is allowed one spin in a 24-hour period.</p>
        <p>2. Details of all participants are confidential.</p>
        <p>3. Coupons are valid until April 30, 2024.</p>
        <p>4. Attempted manipulation will result in disqualification.</p>
        <p>5. Participants can redeem their coupons at our stall centre.</p>
        <p>6. Winners will be notified then and there once they attempt the spin challenge.</p>
        
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="agreeCheckbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label htmlFor="agreeCheckbox" className="text-sm text-primary">
            I agree to the terms and conditions
          </label>
        </div>
       
  <div className='flex justify-center items-center '>
  <button
          onClick={handleProceedClick}
          className={`mt-8 bg-[#57BEBE] text-white px-4 py-2 bg-theme w-[200px] h-10 rounded-md ${
            isChecked ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
          }`}
          disabled={!isChecked}
        >
          Proceed
        </button>
  </div>
      </div>
        </div>
       
      </div>
      </div>
      </div>
    </>
  );
};

export default TandC;
