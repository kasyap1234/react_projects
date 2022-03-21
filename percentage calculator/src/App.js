import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [obtainedValue,setobtainedValue]=useState(); 
  const [totalValue,settotalValue]=useState();
  const [percentage,setPercentage]=useState(); 
 const calculate=(e)=>{
     e.preventDefault(); 

       setPercentage((obtainedValue/totalValue)*100); 

 }; 



 
  return (
    <div className="main">
      <form onSubmit={calculate}> 
      <label> enter the value whose percentage is to be calculated. </label> 
      <br/>
      <br/>

     <input type="number" className="input1" value={obtainedValue} onChange={(e)=>setobtainedValue(e.target.value)}/>
     <br/>

     <input type="number"  className="input2" value={totalValue} onChange={(e)=>settotalValue(e.target.value)}/>
     <br/>
     <button type="submit" className="submit" onSubmit={calculate}> Calculate</button> 
     <h4> percentage is {percentage} % </h4> 

</form> 

      </div>
      
  );
}
