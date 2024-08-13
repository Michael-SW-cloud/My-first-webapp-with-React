import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";


const Settings = (props) => {

     const [theme, setTheme] = useState(props.text);
    const [colorTheme, setColorTheme] = useState(props.text);
    const toggleTheme = () => {
        setTheme((curr) => (curr === "aqua" ? "darkblue" : "aqua"));
    }
     useEffect(()=>{
       document.body.style.backgroundColor = theme;
    },[theme]);

    return (
            <div className="settigspage" >
                <div>           
                    <button className="set-collor-background" onClick={toggleTheme}>Change Background Color</button>  
                </div>

        </div>
  

);
}  
export default Settings;







