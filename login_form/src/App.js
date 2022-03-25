import React ,{useState} from "react";
import "./style.css";

export default function App() {
const [email,setEmail]=useState(""); 
const [password,setPassword]=useState(""); 
const [allentry,setallEntry]=useState([])
const submit=()=>{
 const newEntry={email: email, password: password}; 
 setallEntry(newEntry); 
 console.log(allentry.email); 

}


  return (
    <div>
    <form onSubmit={submit} > 
    <label> Email ID</label> 
    <br/> 

    <input  className="email" onChange={(e)=>setEmail(e.target.value)}/> 
    <br/> 
    <label> Password </label >
   <br/> 

   <input type="password" className="password" onChange={(e)=>setPassword(e.target.value)}/> 
   <br/> 

    <button type="submit" onClick={submit}>submit</button> 

    </form> 

    </div>
  );
}
