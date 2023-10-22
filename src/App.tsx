import { useEffect } from "react";
import "./App.css";
import { CursorProvider } from "./contexts/cursorContext";
import Layout from "./sections/layout";

function App() {
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
    handleAOSAnimations();
  }, []);

  return (
    <>
      <div className='App'>
        <CursorProvider>
          <div className='container'>
            <Layout />
          </div>
        </CursorProvider>
      </div>
    </>
  );
}

export default App;
