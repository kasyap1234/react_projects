import React,{useState} from "react"; 


import "./style.css";

export default function App() {
  const[password,setPassword]=useState(""); 
  const[passwordLength,setPasswordLength]=useState("20"); 
  const[includeNumbers,setincludeNumbers]=useState(false); 
  const[includeSymbols,setincludeSymbols]=useState(false); 
  const[includeLowercase,setincludeLowercase]=useState(false); 

  const[includeUppercase,setincludeUppercase]=useState(false); 
  const generatePassword=()=>{
   const numbers = '0123456789'
 const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
 const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"

let characterList = ''

if (includeLowercase) {
  characterList = characterList + lowerCaseLetters
}

if (includeUppercase) {
  characterList = characterList + upperCaseLetters
}

if (includeNumbers) {
  characterList = characterList + numbers
}

if (includeSymbols) {
  characterList = characterList + specialCharacters
}

setPassword(createPassword(characterList))
 
  }
  const createPassword=(characterList)=>{
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  return (
    <div className="App">
      <h1> Password Generator </h1> 
       <h2> {password} </h2> 

      <br/> 
     <label for="passwordlength"> Password Length </label > 

      <input type="number"  defaultValue={passwordLength} onChange={(e)=>{setPasswordLength(e.target.value)}} id ="passwordlength" />
      <br/> 

      <label for="includeUppercase" > Uppercase </label> 
      <input type="checkbox" checked={includeUppercase} onChange={(e)=> setincludeUppercase(e.target.checked)}id="includeUppercase"/> 
      <br/ >
       
      <label for="includeSymbols"> Symbols </label> 
      <input type="checkbox" checked ={includeSymbols} onChange={(e)=> setincludeSymbols(e.target.checked)}
      id="includeSymbols" /> 
      <br/> 

      <label for="includeNumbers" > Numbers </label>
      <input type="checkbox" checked={includeNumbers} onChange={(e)=> setincludeNumbers(e.target.checked)} id="includeNumbers" /> 
      <br/> 

      <label for="includeLowercase" > Lowercase </label> 
      <input type="checkbox" checked={includeLowercase} onChange={(e)=> setincludeLowercase(e.target.checked)}id="includeLowercase" /> 
      <br/ >
      <br/> 

     <button type ="submit" className="passwordgenerate" onClick={generatePassword} > Generate Password </button > 

    </div>
  );
}
