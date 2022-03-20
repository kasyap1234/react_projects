import React,{useState} from "react";
import "./style.css";


export default function App() {
  const [city,setCity]=useState(''); 
  const changeHandler = e=>{
    setCity(e.target.value); 

  }
  
  const [answer,setAnswer]=useState(""); 

  
 const submitHandler= e=>{
   e.preventDefault(); 
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dff6e92eb6ef87cb27374e46241fc2bd`).then(response=>response.json()).then(data=>{
     const kelvin=data.main.temp; 
     const celsius=kelvin -273.15;
     setAnswer(Math.round(celsius)); 
     //react weather app; 
     

     console.log(celsius); 

   }); 

 }

  return (
    <div className="main"> 
    <div className="main-body"> 
    <h1 className="title">Weather App </h1> 
    <form onSubmit={submitHandler}> 
      <input type="text" value ={city} onChange={changeHandler} /> 
      <br/> 
      <br/>

      <input className="submit_button" type="submit"  />
       
     <h2> Temperature is {answer}</h2> 


      </form> 
    </div> 
    
    </div> 

  );
}
