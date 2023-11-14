import { useRef, useEffect, useContext } from "react";
import About from "./about";
import Hero from "./hero";
import Work from "./work";
import { CursorContext } from "../contexts/cursorContext";
const Layout = () => {
  const cursor = useRef<any>(null);
  const { isWhiteBackground } = useContext(CursorContext);

  const handleMouseMove: (e: any) => void = (e?: any) => {
    cursor.current.style.visibility = "visible";
    var page: any = document.getElementById("root")?.getBoundingClientRect();
    var x = e.clientX - page.left;
    var y = e.clientY - page.top;
    cursor.current.style.transform = `translate3d(${x - 10}px, ${y - 10}px , 0`;
  };
  useEffect(() => {
    if (window.innerWidth > 500) {
      window.addEventListener("mousemove", (e) => handleMouseMove(e));
      window.addEventListener("wheel", (e) => handleMouseMove(e));
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("wheel", (e) => handleMouseMove(e));
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
