import { Canvas } from "@react-three/fiber";
import { Sphere, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import "../styles/sections/hero.scss";
import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <div className='hero section'>
      <Navbar />
      <div className='left'>
        <div className='content'>
          <h1 className='name'>Hey, I'm Guy Ezra</h1>
          <span className='subTitle'>Front End Developer</span>
          <p className='desc'>
            My biggest passion is to make a website come to life.
          </p>
        </div>
      </div>
      <div className='right'>
        <Canvas className='canvas'>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={3} />
          <directionalLight position={[1, 2, 3]} />
          <Sphere args={[1, 100, 200]} scale={1.5}>
            <MeshDistortMaterial
              color='#3d1c56'
              attach='material'
              distort={0.5}
              speed={2}
            />
          </Sphere>
        </Canvas>
      </div>
      <div className='arrow'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='#fff'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-arrow-down'
        >
          <line x1='12' y1='5' x2='12' y2='19' />
          <polyline points='19 12 12 19 5 12' />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
