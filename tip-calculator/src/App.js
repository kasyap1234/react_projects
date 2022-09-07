import "./styles.css";
import {useState} from "react"; 
export default function App() {
  const[input,setInput]=useState(0); 
  const [bill,setBill]=useState(0); 
  const[output,setOutput]=useState(); 
  const[people,setPeople]=useState(0); 

const Calculate =(e)=>{
  e.preventDefault();
  const variable=((bill/100)*input)/people; 
     setOutput(variable); 

}

  return (
    <div className="App">
      <div className="card">
        <p className="heading"> Tip Calculator </p> 
      <label for="input"> Enter your bill </label> 
       <br/> 
       <br/> 


  
      <input type="text" placeholder="enter your bill " value={input} id="input" onChange={(e)=>setInput(e.target.value)}/>
       <p> Enter the percent you want to tip </p >

      

      
      
      
      <br/> 

      <input type="text" value={bill} placeholder="enter amnt to tip in %" onChange={(e)=>setBill(e.target.value) } / > 
      <br/> 

      <p> How many people are sharing the bill ? </p> 
      <input type="text" value={people} onChange={(e)=>setPeople(e.target.value)} /> 
      <br/> 

      <button onClick={Calculate}> Calculate </button > 
      <br/> 

      {output}
      <br/> 
      
      

      </div> 

    </div>
  );
}
