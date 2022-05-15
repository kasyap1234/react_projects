import React,{useState} from "react";
import axios from "axios" ; 

import "./styles.css";

export default function App() {
  const[Lat,setLat]=useState(""); 
  const[Lng,setLng]=useState(""); 
  const[status,setStatus]=useState(""); 
  const[temp,setTemp]=useState(""); 


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }
 const getWeather= () =>{
   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lng}&exclude={part}&appid=787354f776595e09e4c6c0673acd9eb4`).then(response=>response.json()).then(data=>  {
    const kelvin=data.current.temp; 
    const celsius=kelvin -273.15; 
    
    setTemp(Math.round(celsius));

  } 


  

   ); 
   


 }
 
  
  
  
  return (
    <div>
    <button onClick={getLocation} > Get Location </button>
    <p>{status} </p> 
    
  
      <button onClick={getWeather} > Find Weather </button >
      <br/> 

    {   `The temperature is ${temp} C ` }






    </div>
  );
}
