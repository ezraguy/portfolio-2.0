import "../styles/components/navbar.scss";
import githubIcon from "../assets/github.svg";
import linkedInIcon from "../assets/linkedin.svg";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <b>
          Gu<span>y</span>Ez<span>r</span>a
        </b>
      </div>
      <div className='links'>
        <a
          href='https://github.com/ezraguy'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='link' src={githubIcon} alt='Github' />
        </a>
        <a
          href='https://www.linkedin.com/in/guyezra'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img className='link' src={linkedInIcon} alt='linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
