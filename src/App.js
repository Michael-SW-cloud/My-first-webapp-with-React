import Button from './components/Button';
import TextField from './components/TextField';
import React, {useState} from "react"
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [showText, setshowText] = useState(false);
  const URL = "https://hello-world.debug.citscloud.de/";
const handelClick = () => {
  const handelClick = () => {
    setshowText(showText === "Submit" ? "Button gedrückt" : "Submit");
  };
};

  return (
    <div>
      <div className="logo">
        <img
          src="https://consider-it.de/wp-content/uploads/2024/06/CIT-horizontal-V1-20240221.svg"
          alt="Logo"
        />
      </div>

      <div className="demo-text">
        <p>Demo-text</p>
      </div>

      <div>
        <TextField text={"teset"}/>
      </div>

      <Button label={"ok"} onClick={handelClick} />
    </div>
  );
}

export default App;
