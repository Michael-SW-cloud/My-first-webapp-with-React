import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Fetchdata(){

    const URL = "https://hello-world.debug.citscloud.de/";
    
    const [results,setResults] = useState([]);
    useEffect( () => {

        async function getData() {
            const response = await fetch(URL);
            const data = await response.json();
            setResults(data);
        } getData();


    });
    
}


 const handelClick = () => {
   const handelClick = () => {
     setshowText(showText === "Submit" ? "Button gedrückt" : "Submit");
   };
 };





