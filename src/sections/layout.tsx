import { useRef, useEffect, useContext } from "react";
import About from "./about";
import Hero from "./hero";
import Work from "./work";
import { CursorContext } from "../contexts/cursorContext";
const Layout = () => {
  const cursor = useRef<any>(null);
  const { isWhiteBackground } = useContext(CursorContext);

  const handleMouseMove: (e: any) => void = (e?: any) => {
    const { clientX, clientY } = e;
    cursor.current.style.visibility = "visible";
    cursor.current.style.transform = `translate3d(${clientX - 10}px, ${
      clientY - 10
    }px , 0`;
  };
  useEffect(() => {
    if (window.innerWidth > 500) {
      window.addEventListener("mousemove", (e) => handleMouseMove(e));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className={`layout ${isWhiteBackground ? "dark" : ""}`}>
      <div className='circle' ref={cursor}></div>
      <Hero />
      <About />
      <Work />
    </div>
  );
};

export default Layout;
