import "./App.css";
import Navbar from "./components/navbar";
import About from "./sections/about";
import Hero from "./sections/hero";
import Work from "./sections/work";

function App() {
  return (
    <>
      <div className='App'>
        <div className='container'>
          <Navbar />
          <Hero />
          <About />
          <Work />
        </div>
      </div>
    </>
  );
}

export default App;
