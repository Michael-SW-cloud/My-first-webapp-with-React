import Button from './components/Button';
import TextField from './components/TextField';
import MuiDrawer from './components/MuiDrawer';
import React, {useState} from "react"

import axios from "axios";


function App() {
  const [showText, setshowText] = useState("");
  const URL = "https://hello-world.debug.citscloud.de/";
  const handelClick = () => {
    
    axios.get(URL)
    .then((response) => setshowText(response.data));
  };

  return (
    <div>
      <div>
        <MuiDrawer />
      </div>
      
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
        <TextField text={showText} />
      </div>

      <Button label={"ok"} onClick={handelClick} />
    </div>
  );
}

export default App;
