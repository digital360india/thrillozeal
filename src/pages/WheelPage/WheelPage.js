import React from "react";
import WheelOfFortune from "../../Components/WheelOfFortune";
import VisitUs from "../../Components/VisitUs";
import Header from "../../Nainital/Header";

const WheelPage = () => {
  return (
    <>
     <Header/>
      <div className=" pt-[3vh] lg:pt-[10vh]   flex items-center justify-center ">
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
       <WheelOfFortune/>
        </div>
        </div>
      </div>
        <h1 className="text-center mt-5 text-[24px]  font-semibold ">Spin wheel To win Discounts</h1>
    </>
  );
};

export default WheelPage;
