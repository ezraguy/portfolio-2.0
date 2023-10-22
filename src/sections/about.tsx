import { useContext, useEffect, useState } from "react";
import "../styles/sections/about.scss";
import content from "../content.json";
import { CursorContext } from "../contexts/cursorContext";
const About = () => {
  const items: string[] = ["who", "why", "what"];
  const { setIsWhiteBackground } = useContext(CursorContext);

  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const handleActiveItem: (index: number) => void = (index: number) => {
    setActiveItemIndex(index);
  };

  return (
    <div className='about section'>
      <div className='wrapper'>
        <div className='left'>
          {items.map((item, index) => (
            <div
              onClick={() => handleActiveItem(index)}
              className={`animatedTextContainer  ${
                activeItemIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <p className='animatedText'>{item}</p>
              <p
                className={`backAnimatedText ${
                  index === activeItemIndex ? "active" : ""
                }`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className='right'>
          <div
            data-aos='zoom-in'
            data-aos-delay='200'
            className='editor'
            onMouseEnter={() => setIsWhiteBackground(true)}
            onMouseLeave={() => setIsWhiteBackground(false)}
          >
            <div className='lineNumbers'>
              {new Array(19).fill("").map((item, index) => (
                <div className='' key={index}>
                  {index + 1}
                </div>
              ))}
            </div>
            <div className='content'>
              {[...Object.values(content)[activeItemIndex].split(" ")].map(
                (item, index) => (
                  <div key={index} className='word'>
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
