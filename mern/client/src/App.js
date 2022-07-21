
import './App.css';

import {useState,useEffect} from "react"; 
import axios from "axios"; 

function App() {
  const [listt,setListt]=useState([{} ]);
  const [name,setName]=useState(""); 
  const [username,setUsername]=useState(""); 

  useEffect(()=>{
axios.get("http://localhost:9000/getUsers").then((response)=>{
  setListt(response.data); 

})
  },[]); 
  const createUser=()=>{
    axios.post("http://localhost:9000/createUser",{
      name: name , 
      username: username,
    }).then((response)=>{
      alert("user created"); 

    })

  }

  return (
    <div className="App">
      <div className="display">
        {
          listt.map((user)=>{
            return (
              <div> 
                <h1> Name: {user.name} </h1> 
                <h1> Username: {user.username}</h1>
                </div> 
            )
          })
        }

      </div> 
      <input type="text" placeholder="Name" onChange={(e)=>{
        setName(e.target.value)
      }} /> 
      <input type="text" placeholder="username" onChange={(e)=>{
        setUsername(e.target.value)
      }}/> 
      <button onClick={createUser} > Submit </button > 

      
    </div>
  );
}

export default App;
