import "./styles.css";
import {useState} from "react"; 

import QRcode from "qrcode"; 
export default function App() {
  const[url,setUrl]=useState(''); 
  const [qrcode,setQrcode]=useState(''); 
  const generate=()=>{
    QRcode.toDataURL(url,(err,url)=>{
      if(err){
        return console.error(err); 
      }
      console.log(url); 
      setQrcode(url); 

    })
  }
  return (
    <div className="App">
      <h1> QR code generator  </h1>
      <input type="text"  placeholder="enter an url " value={url} onChange={(e)=>setUrl(e.target.value)}/> 
       
      <button onClick={generate}> Generate QR code </button > 

    {
      qrcode && <>
      <br/> 

      <img src={qrcode} /> 
      <br/> 
      
      < a className="link" href={qrcode} download="qrcode.png"> Download </a> 
      </>

    }

     

    </div>
  );
}
