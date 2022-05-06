import React from 'react';
import Form from './Form/Form';
import PokeList from './PokeList/PokeList';
import Home from './Home/Home';
import Cards from './Cards/Cards';
import PokeCreate from './PokeCreate/PokeCreate'
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  
  return <main>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/list' element={<PokeList/>}/>
        <Route path='/find' element={<Form/>}/>
        <Route path='/createPoke' element={<PokeCreate/>}/>
        <Route path='/card' element={<Cards/>}/>
      </Routes>
    </main>;
};      

export default Main;
