import React ,{useState} from "react";
import "./style.css";

export default function App() {
  const [cost,setCost]=useState(0);
  const [tip,setTip]=useState(0); 
  const [result,setResult]=useState(0); 
  const calculate=(e)=>{
    e.preventDefault();
setResult(eval(cost + tip)); 


  }

  return (
    <div>
      <label> Enter your bill </label> 
      <br/>

      <input type="number" className="bill" onChange={(e)=>setCost(Number(e.target.value))}/>

      <br/>
      <br/>
      <label> Enter the tip</label> 
      <br/> 

      <input type="number" className="tip"  onChange={(e)=>setTip(Number(e.target.value))}/>
      <br/> 
      <button type="submit" className="submit" onClick={calculate} >Calculate</button> 


      <p>The final bill is {result}</p> 

      <br/>


    </div>
  );
}
