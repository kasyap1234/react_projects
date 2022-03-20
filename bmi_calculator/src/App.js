import React,{useState} from "react";
import "./style.css";

export default function App(){
  const[height,setHeight]=useState(); 
  const[weight,setWeight]=useState(); 
  const[bmi,setBmi]=useState(0); 
  const calculate=(e)=>{
    e.preventDefault(); 
    const bmi= weight/(height)**2; 
    setBmi(bmi); 

  }; 
  return (
    <div className="main">
      <form >
        <div>
          <label>height in metres</label> 
          <br/>

          <input  className="height" value={height} onChange={(e)=>setHeight(e.target.value)} />
          
          <br/> 

          <label> weight in kilos</label> 
          <br/>


          <input className="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}    />
                </div> 
                <button type="submit" onSubmit={calculate}>Calculate</button> 
          <p> Your bmi is {bmi}</p> 


      </form> 
      </div>
  )
}
