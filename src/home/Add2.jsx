import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function Add2() {
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
     <div ref={loaderRef} className={`Adds ${shown && "addAnimationRight"}`}>
         <img src="/Images/virtualtour.webp" alt="" />
     </div>
  )
}

export default Add2