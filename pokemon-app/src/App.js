import "./styles.css";
import { useEffect, useState } from "react";

import axios from "axios";
export default function App() {
  const [pokemon, setPokemon] = useState("");
  const[chosen,setChosen]=useState(false); 

  const [pokeemon,setPokeemon]=useState({
    name: pokemon ,
         species: "",
          img: "",
           hp: "", 
           defense: "", 
           type: "", 
  }); 

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      setPokeemon({
        name: pokemon ,
         species: res.data.species.name,
          img: res.data.sprites.front_default,
           hp: res.data.stats[0].base_stat, 
           defense: res.data.stats[1].base_stat, 
           type: res.data.types[0].type.name, 

      })
      setChosen(true); 

    });
  };
  return (
    <div className="main--component"> 
    <div className="App">
      <h1>Pokemon App </h1>
      <br />

      <input
        type="text"
        onChange={(e) => {
          setPokemon(e.target.value);
        }}
      />
      <br />

      <button onClick={searchPokemon} className="search" type="submit">
        {" "}
        Search Pokemon{" "}
      </button>
      </div>
      <div className="display"> 
      {!chosen ? (<h3> Please Choose a pokemon </h3> ): (
        <>
      <h4> {pokeemon.name} </h4> 
      
      <img src={pokeemon.img} /> 
      <h4>  Species: {pokeemon.species} </h4> 
      <br/> 

      <h4> Type: {pokeemon.type}</h4>
     <h4> Hp : {pokeemon.hp} </h4> 
     <h4> defense: {pokeemon.defense} </h4> 
     
      </> 
      
      )}

      </div> 
   </div> 
  );
}
