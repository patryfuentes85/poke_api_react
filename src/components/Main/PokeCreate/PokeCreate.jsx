import React, {useContext} from 'react';
import {pokemonContext} from '../../../context/pokemonContext';
import {useForm} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PokeCreate() {

  const {pokemonList, setPoke, setPokemonList} = useContext(pokemonContext);
  const { register, formState: { errors } } = useForm();   
  


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
    console.log(newPokemon);
    setPoke(newPokemon); 
    setPokemonList([...pokemonList,newPokemon]);
  }


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
    <TextField type='text' {...register('type1',{required:true})} name='type1'/>
   
    <label className="create_label" htmlFor="type2">Type 2:</label>
    <TextField type='text' {...register('type2',{required:true})}/>    
    
    <label className="create_label" htmlFor="weight">Weight:</label>
    <TextField type='text' {...register('weight',{required:true})}/>
          
    <Button type='submit' variant='outlined'>Submit</Button>
    </form>
   </div>
  )
}

export default PokeCreate
