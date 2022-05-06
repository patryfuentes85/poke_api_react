import React, { useEffect, useState } from "react";
import axios from 'axios';
import Cards from '../Cards';


const Form = () => {
  const [pokemon, setPokemon] = useState(""); // guardo los datos 
  const [pokemonList, setPokemonList] = useState([]); // guardo los datos 
  // equivale a un componentDidUpdate()
  useEffect(() => {
  async function fetchData() {
    try{
      if (pokemon !== '') {
      console.log('hola', pokemon);
      // Petición HTTP
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = resp.data;
        const pokem = {
          name:data.name,
          id:data.id,
          img:data.sprites.front_default,
          weight:data.weight
        }
        setPokemonList([...pokemonList,pokem]);
        console.log(pokem);

    } else {

    }
      
    }catch(e){
      setPokemonList([]) // No pintes nada
    }
  }
    fetchData();
  }, [pokemon]);

  const handleSubmit = e => {
    e.preventDefault();
    const poke = e.target.pokemon.value;
    console.log(poke)
    setPokemon(poke) // Modificando el estado de Value
  };
  return    <section>
              <h1>Find your Pokemon</h1>
              <form onSubmit={handleSubmit}>
                <input name="pokemon"/>
              </form>
              {pokemonList.length!==0?
                              <div
                                 className='cardsPoke'>
                                  {pokemonList.map((p, i) => (
                                    <Cards key={i} value={p}/>
                                  ))}
                              </div>
                                :""
              }
            </section>
};
export default Form;