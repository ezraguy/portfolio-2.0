import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./sections/about";
import Hero from "./sections/hero";
import Work from "./sections/work";

function App() {
  const cursor = useRef<any>(null);
  const innerCircle = useRef<any>(null);
  const handleMouseMove: (e: any) => void = (e: any) => {
    const { clientX, clientY } = e;
    cursor.current.style.visibility = "visible";
    cursor.current.style.transform = `translate3d(${clientX}px, ${clientY}px , 0`;
  };
  const handleMouseHold: (isMouseDown: boolean) => void = (
    isMouseDown: boolean
  ) => {
    innerCircle.current.style.opacity = isMouseDown ? 1 : 0;
  };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));
    window.addEventListener("mousedown", () => handleMouseHold(true));
    window.addEventListener("mouseup", () => handleMouseHold(false));
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='App'>
        <div className='circle' ref={cursor}>
          <div className='innerCircle' ref={innerCircle}></div>
        </div>
        <div className='container'>
          <Hero />
          <About />
          <Work />
        </div>
      </div>
    </>
  );
}

export default App;
