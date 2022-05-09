import React, {useContext, useState} from 'react';
import {pokemonContext} from '../../../context/pokemonContext';
import {useForm} from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PokeCreate() {

  const {pokemonList, setPoke, setPokemonList} = useContext(pokemonContext);
  const { register, formState: { errors } } = useForm();   
/*   const [value, setValue] = useState(''); */

  

  const createPokemon = (e) => {
    e.preventDefault();
    const newPokemon = {
  
      name: e.target.name.value,
      id: e.target.id.value,
      img: e.target.image.value,
      type1: e.target.type1.value,
      type2: e.target.type2.value,
      weight: e.target.weight.value
    }
    console.log('typeof',typeof newPokemon.type1);
    
    setPoke(newPokemon); 
    setPokemonList([...pokemonList,newPokemon]);
  }

  /* const handleChange = (e) => {
    console.log(e.target.type1.value);
    setValue(e.target.type1.value);
  } */

  return (
    <div>
      <h1>Create your Pokemon !!</h1>
    <form className='formClass' onSubmit={createPokemon}>
    <label className="create__label" htmlFor="name">Name:</label>
    <TextField type='text' {...register('name',{required:true})}/>

    <label className="create_label" htmlFor="id">Id:</label>
    <TextField type='text' {...register('id',{required:true})}/>

    <label className="create_label" htmlFor="url">Image:</label>
    <TextField type='url' {...register('url',{required:true})} name='image'/>
 
    <label className="create__label" htmlFor="type1">Type 1:</label>
    <Select {...register("type1")} label="type1" name="type1" defaultValue='' required>
            <MenuItem value="bug">Bug</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="dragon">Dragon</MenuItem>
            <MenuItem value="electric">Electric</MenuItem>
            <MenuItem value="fairy">Fairy</MenuItem>
            <MenuItem value="fighting">Fighting</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            <MenuItem value="flying">Flying</MenuItem>
            <MenuItem value="ghost">Ghost</MenuItem>
            <MenuItem value="grass">Grass</MenuItem>
            <MenuItem value="ground">Ground</MenuItem>
            <MenuItem value="ice">Ice</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="poison">Poison</MenuItem>
            <MenuItem value="psychic">Psychic</MenuItem>
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="steel">Steel</MenuItem>
            <MenuItem value="water">Water</MenuItem>
          </Select>
          <label className="create__label" htmlFor="type2">Type 2:</label>
          <Select {...register("type2")} label="type2" name="type2" defaultValue=''>
            <MenuItem value="bug">Bug</MenuItem>
            <MenuItem value="dark">Dark</MenuItem>
            <MenuItem value="dragon">Dragon</MenuItem>
            <MenuItem value="electric">Electric</MenuItem>
            <MenuItem value="fairy">Fairy</MenuItem>
            <MenuItem value="fighting">Fighting</MenuItem>
            <MenuItem value="fire">Fire</MenuItem>
            <MenuItem value="flying">Flying</MenuItem>
            <MenuItem value="ghost">Ghost</MenuItem>
            <MenuItem value="grass">Grass</MenuItem>
            <MenuItem value="ground">Ground</MenuItem>
            <MenuItem value="ice">Ice</MenuItem>
            <MenuItem value="normal">Normal</MenuItem>
            <MenuItem value="poison">Poison</MenuItem>
            <MenuItem value="psychic">Psychic</MenuItem>
            <MenuItem value="rock">Rock</MenuItem>
            <MenuItem value="steel">Steel</MenuItem>
            <MenuItem value="water">Water</MenuItem>
          </Select> 

          <label className="create_label" htmlFor="id">Weight:</label>
          <TextField type='text' {...register('weight',{required:true})}/>

    <Button type='submit' variant='outlined'>Submit</Button>
    </form>
   </div>
  )
}

export default PokeCreate
