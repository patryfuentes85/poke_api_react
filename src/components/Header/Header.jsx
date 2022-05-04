import React, { Component } from "react";
import Nav from './Nav';
import {userContext} from '../../context/userContext';
import Button from '@mui/material/Button';
import poke from '../../assets/poke.png';


export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img src={poke} alt='logo'></img>
        <Nav/>
        <div className='user'>
        <userContext.Consumer>
          {({user,logout}) =>
              user?
                <>
                  <p>Hola {user}</p>
                  <Button variant="contained" onClick={logout}>Logout</Button>
                </>:""
          }
          </userContext.Consumer>
        </div>
        </header>
    )
  }
}
export default Header
