import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom";
import {userContext} from './context/userContext';
import {pokemonContext} from './context/pokemonContext';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './styles/styles.scss';

function App() {

  const [user, setUser] = useState("Patricia"); // hook useState
  const [poke, setPoke] = useState([]); 

  const [pokemon, setPokemon] = useState(""); // guardo los datos 
  const [pokemonList, setPokemonList] = useState([]); // guardo los datos 
  // equivale a un componentDidUpdate()
  useEffect(() => {
  async function fetchData() {
    try{
      if (pokemon !== '') {
    
      // Petición HTTP
      const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = resp.data;
        const pokem = {
          name:data.name,
          id:data.id,
          img:data.sprites.front_default,
          weight:data.weight,
          type1:data.types[0].type.name || "",
          type2:data.types[1] ? data.types[1].type.name : ""
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
     // eslint-disable-next-line
  }, [pokemon]);

  const handleSubmit = e => {
    e.preventDefault();
    const poke = e.target.pokemon.value;
    setPokemon(poke) // Modificando el estado de Value
  };


  //login

  const login = (name) => {
      setUser(name);
  }
  
  //logout

  const logout = () => {
    setUser("");
  }


  const dataPok = {
    poke,
    pokemonList,
    setPoke,
    setPokemonList,
    handleSubmit
  }


  const data = {
    user,
    login,
    logout,
  
  }




  return (
    <div className="App">
        <BrowserRouter>
        <pokemonContext.Provider value={dataPok}>
        <userContext.Provider value={data}>
        <Header/>
        <Main/>
        </userContext.Provider>
        </pokemonContext.Provider>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
