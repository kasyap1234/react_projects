import React from "react";
import "./style.css";
import {useState} from "react"; 



export default function App() {
 
 const array=["heads","tails"]; 
 const [index,setIndex]=useState(""); 

  function generator(){

     var randomiser=Math.random()
    if(randomiser<0.5){
      randomiser=0; 
      Image="heads.png"; 


      setIndex(array[randomiser]); 

    }
    else{
      randomiser=1; 
       Image="tails.png"
     
      setIndex(array[randomiser])
    }
  }
  
  
  
  return (
    <div>
      <h1> Coin Flipper  </h1> 
      <button onClick={generator} > Flip </button > 
     <h4> {index} </h4>
     <img src={Image}/> 





    </div>
  );
}
