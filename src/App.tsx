import "./App.css";
import { CursorProvider } from "./contexts/cursorContext";
import Layout from "./sections/layout";

function App() {
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
