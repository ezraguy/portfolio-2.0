import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./sections/about";
import Hero from "./sections/hero";
import Work from "./sections/work";

function App() {
  const cursor = useRef<any>(null);
  const handleMouseMove: (e: any) => void = (e?: any) => {
    const { clientX, clientY } = e;
    cursor.current.style.visibility = "visible";
    cursor.current.style.transform = `translate3d(${clientX - 5}px, ${
      clientY - 5
    }px , 0`;
  };

  const handleAOSAnimations: () => void = () => {
    const aosAnimation = document.querySelectorAll("[data-aos]");
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("aos-animate");
        } else {
          entry.target.classList.remove("aos-animate");
        }
      });
    });
    aosAnimation.forEach((aosObject) => {
      observer.observe(aosObject);
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", (e) => handleMouseMove(e));
    handleAOSAnimations();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='App'>
        <div className='container'>
          <div className='circle' ref={cursor}></div>
          <Hero />
          <About />
          <Work />
        </div>
      </div>
    </>
  );
}

export default App;
