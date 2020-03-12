import React, { useState } from 'react';
import './App.css';
import axios from "axios";



function App() {
  const [pokemon,setPokemon] = useState([]);
  const handleClick = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(result => {
      setPokemon(result.data.results)
        console.log(result)
    }
    )}
  
  return (
    <div className="App">
      <button onClick={handleClick}>Fetch Pokemon</button>
      <div>
        {pokemon.map((pokemon, i)=>(
          <p key = {i}>{pokemon.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
