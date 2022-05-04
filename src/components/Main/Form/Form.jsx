import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';

const Form = () => {

  const [pokemon, setPokemon] = useState([]); // guardo los datos 

  try {
    useEffect(() => {
      const getPoke = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await resp.json();
        setPokemon(data);
      };
      getPoke();
    }, []);
    
    /// funcion para guardar el valor del pokemon que buscamos
    const getName = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      console.log(name);
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${event.target.name.value}`
      );
      const data = await resp.json();
      setPokemon(data);
    };

    const paintPokemons = () => 
    pokemon.results.map((item, i) => (
      <Card data={item} key={i} img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
    ));


    return (
      <>
      <h4>Find your Pokemon:</h4>
        <form onSubmit={getName}>
          <label htmlFor="name">Pokemon:</label>
          <input name="name" type="text" placeholder="...ditto"></input>
        </form>
        
        {!pokemon.abilities
        ?(paintPokemons())
        :(
        <div>
        <h2>Pokemon Name:{pokemon.name}</h2>
        <h3>Type:{pokemon.types[0].type.name}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon" />
        </div>
        )}
      
      </>
    );
  } catch (err) {
    console.log(err);
  }
};

export default Form;