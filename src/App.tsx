import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import DemoA from "./components/DemoA";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <DemoA />
      </div>
    </div>
  );
}

export default App;
