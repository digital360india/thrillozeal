import React, { useState, useEffect } from "react";

import { Wheel } from "react-custom-roulette";
import { useNavigate } from "react-router-dom";

const data = [
  { option: "50 %" },
  { option: "60 %" },
  { option: "70 %" },
  { option: "80 %" },
  { option: "90 %" },
  { option: "100 %" },
  { option: "Try Again"},
];
const WinningCard = ({ onClose, prizeAmount }) => {
  const percentage = data[prizeAmount].option;

  return (
    <div className=" absolute  w-screen h-[92vh]  lg:h-[82vh]  left-0 bottom-0 bg-white z-50 grid place-content-center ">
      <img src="/congrats.png"   />

      <h1 className="text-2xl w-[326px] mx-auto text-center  mb-4  mt-4 text-primary text-[24px]">
        Yaaaay.... you’ve won {percentage} discount
      </h1>
      <h1 className="text-2xl w-[326px] mx-auto  mb-4 text-center mt-4 text-black text-[18px]">
        Visit Us Today to Grab your Coupon
      </h1>
      <div className=" flex items-center justify-center">
        <button
          className="bg-theme text-white px-4 py-2 rounded-2xl w-[200px] "
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const WheelOfFortune = () => {
  const navigate=useNavigate();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showWinningCard, setShowWinningCard] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = determinePrize();
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);

    }
  };

  const determinePrize = () => {

    const probabilities = [0.3, 0.6, 0.1, 0, 0, 0, 0];
    const randomNumber = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < probabilities.length; i++) {
      cumulativeProbability += probabilities[i];
      if (randomNumber < cumulativeProbability) {
        return i;
      }
    }

    return probabilities.length - 1;
  };

  const prizeAcquired = (prizeNumber) => {
    setShowWinningCard(true);
    console.log(prizeNumber)
  };

  const closeWinningCard = () => {
    
    setShowWinningCard(false);
    
  };

  return (
    <div>

      <div className="flex flex-col justify-center items-center relative mt-3 ">
        <Wheel
          mustStartSpinning={mustSpin}
          backgroundColors={["#FF7A00", "#EBFF00", "#00FF38", "#00D1FF", "#0029FF","#FF00F5","#FF0000"]}
          textColors={["white","white","white","white","white","white","white"]}
          fontSize={20}
          innerBorderColor={"white"}
          outerBorderColor={"#57BEBE"}
          outerBorderWidth={10}
          perpendicularText={true}
          radiusLineColor="transparent"
          prizeNumber={prizeNumber}
          innerBorderWidth={70}
          
          textDistance={80}
          data={data} 
          onStopSpinning={() => {
            setMustSpin(false);
            prizeAcquired(prizeNumber);
          }}
        />
        <button className="absolute  z-20 bg-[#57BEBE] rounded-full text-[15px] p-4 h-28 w-28 border-white border-2 text-white" onClick={handleSpinClick}>
          SPIN
        </button>
      
      </div>
      {showWinningCard && (
        <WinningCard onClose={closeWinningCard} prizeAmount={prizeNumber} />
      )}
    </div>
  );
};

export default WheelOfFortune;
