import "../styles/sections/work.scss";

const Work = () => {
  return (
    <div className='work section'>
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
        <div className='cards'>
          <div className='card'>test</div>
          <div className='card'>test</div>
          <div className='card'>test</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
