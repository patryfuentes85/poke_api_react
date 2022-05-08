import React, {useContext} from 'react';
import {pokemonContext} from '../../../context/pokemonContext';
import {useForm} from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PokeCreate() {

  const {createPokemon, poke} = useContext(pokemonContext);

  const { register, handleSubmit, formState: { errors } } = useForm();   
  const onSubmit = data => createPokemon(data);
  console.log(poke)
  

  return (
    <div>
      <h1>Create your Pokemon !!</h1>
    <form className='formClass' onSubmit={handleSubmit(onSubmit)}>
    <label className="create__label" htmlFor="name">Name:</label>
    <TextField type='text' {...register('name',{required:true})}/>

    <label className="create_label" htmlFor="url">Id:</label>
    <TextField type='text' {...register('id',{required:true})}/>

    <label className="create_label" htmlFor="url">Image:</label>
    <TextField type='url' {...register('url',{required:true})} name='image'/>

    <label className="create__label" htmlFor="name">Type 1:</label>
    <Select {...register("type1")} label="type1" name="type1" required>
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
          <label className="create__label" htmlFor="name">Type 2:</label>
          <Select {...register("type2")} label="type2" name="type2">
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
    <Button type='submit' variant='outlined'>Submit</Button>
    </form>
   </div>
  )
}

export default PokeCreate
