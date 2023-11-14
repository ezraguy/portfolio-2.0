import { useContext } from "react";
import "../styles/sections/work.scss";
import { CursorContext } from "../contexts/cursorContext";
import archProject from "../assets/projects/arch.png";
import IntegoProject from "../assets/projects/intego.png";
import officeLiteProject from "../assets/projects/office_lite.png";
import LinkIcon from "../assets/link.svg";
import CodeIcon from "../assets/code.svg";
const Work = () => {
  interface Project {
    id: number;
    name: string;
    img: any;
    websiteLink: string;
    codeLink?: string;
  }
  const projects: Project[] = [
    {
      id: 1,
      name: "Arch Studio",
      img: archProject,
      websiteLink: "https://arch-studio-ge.netlify.app",
      codeLink: "https://github.com/ezraguy/arch-studio",
    },
    {
      id: 2,
      name: "Intego",
      img: IntegoProject,
      websiteLink: "https://www.intego.com/",
    },
    {
      id: 3,
      name: "OfficeLite",
      img: officeLiteProject,
      websiteLink: "https://office-light-ge.netlify.app/",
      codeLink: "https://github.com/ezraguy/office-light-challenge",
    },
  ];
  const { setIsWhiteBackground } = useContext(CursorContext);
  return (
    <div className='work section'>
      <div className='wrapper'>
        <div className='left'>
          <div className='title'>
            <span data-aos='fade-down' data-aos-delay='200'>
              Some
            </span>
            <span data-aos='fade-down' data-aos-delay='400'>
              of
            </span>
            <span data-aos='fade-down' data-aos-delay='600'>
              my
            </span>
            <span data-aos='fade-down' data-aos-delay='800'>
              work
            </span>
          </div>
        </div>
        <div className='right'>
          <div
            className='cards'
            onMouseOver={() => {
              setIsWhiteBackground(true);
            }}
            onMouseOut={() => {
              setIsWhiteBackground(false);
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className='card arch'>
                <img src={project.img} className='projectImage' alt='project' />
                <div className='overlay'>
                  <div className='projectName'>{project.name}</div>
                  <div className='links'>
                    <div className='link'>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={project.websiteLink}
                      >
                        <img src={LinkIcon} alt='project landing page' />
                      </a>
                    </div>
                    {project.codeLink && (
                      <div className='link'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={project.codeLink}
                        >
                          <img src={CodeIcon} alt='project code link' />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
