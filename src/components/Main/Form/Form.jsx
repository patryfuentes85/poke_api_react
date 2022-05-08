import React, { useContext } from "react";
import Cards from '../Cards';
import {userContext} from '../../../context/userContext'


const Form = () => {
  
  const {pokemonList, handleSubmit} = useContext(userContext);

  return    <section>
              <h1>Find your Pokemon !!</h1>
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