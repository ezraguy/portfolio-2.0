import { useState } from "react";
import "../styles/sections/about.scss";

const About = () => {
  const items: string[] = ["RESPONSIVE", "FAST", "ALIVE"];
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const handleActiveItem: (index: number) => void = (index: number) => {
    setActiveItemIndex(index);
  };
  return (
    <div className='about section'>
      <div className='container'>
        <div className='left'>
          {items.map((item, index) => (
            <div
              onClick={() => handleActiveItem(index)}
              className={`animatedTextContainer ${
                activeItemIndex === index ? "active" : ""
              }`}
              data-aos='fade-down'
              data-aos-delay={index * 250}
              key={index}
            >
              <p className='animatedText'>{item}</p>
              <p className='backAnimatedText'>{item}</p>
            </div>
          ))}
        </div>
        <div className='right'></div>
      </div>
    </div>
  );
};

export default About;
