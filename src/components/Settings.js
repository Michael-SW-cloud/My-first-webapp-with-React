import React, { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
const Settings = () => {

    const [theme, setTheme] = useState("darkblue");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "aqua" ? "darkblue" : "aqua"));
    }
    useEffect(()=>{
        document.body.style.backgroundColor = theme;
    },[theme]);
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className="settigspage" >
                <div>           
                    <button className="set-collor-background" onClick={toggleTheme}>Change Background Color</button>  
                </div>

        </div>
  
        </ThemeContext.Provider>
        
);
}  
export default Settings;




