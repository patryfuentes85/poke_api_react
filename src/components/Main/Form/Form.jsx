import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';

const Form = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokSelect, setPokSelect] = useState([]);
  try {
    useEffect(() => {
      const getPoke = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const data = await resp.json();
        setPokemon(data);
      };
      getPoke();
    }, []);
    

    const getName = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      console.log(name);
      const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${e.target.name.value}`
      );
      const data = await resp.json();
      setPokSelect([...pokSelect, data]);
      setPokemon(data);
    };

    const paintPokemons = () => 
    pokemon.results.map((item, i) => (
      <Card data={item} key={i} foto={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} />
    ));


    return (
      <>
      <p>Find your Pokemon:</p>
        <form onSubmit={getName}>
          <label htmlFor="name">Pokemon:</label>
          <input name="name" type="text" placeholder="search your pokemon"></input>
          <button>Search</button>
        </form>
        
        {!pokemon.abilities
        ?(paintPokemons())
        :(
          <article>
        <h2>{pokemon.name} - {pokemon.types[0].type.name}</h2>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
        </article>
        )}
      
      </>
    );
  } catch (e) {
    console.log(e);
  }
};

export default Form;