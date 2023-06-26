import { useEffect, useRef, useState } from "react";
import "./Adds.css";

function Add() {
  const [shown, setShown] = useState(false);
  const [height, setHeight] = useState(1000);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (!shown) {
      const windowHeight = window.innerHeight;
      window.addEventListener("scroll", () => {
        const { top } = loaderRef?.current?.getBoundingClientRect();
        setHeight(top);
      });
      console.log(height);
      if (height <= windowHeight) {
        console.log("true hogya ");
        setShown(true);
      }
    }
  }, [height]);

  return (
    <div ref={loaderRef} className={`Adds ${shown && "addAnimation"}`}>
      <img src="/Images/add.webp" alt="" />
    </div>
  );
}

export default Add;
