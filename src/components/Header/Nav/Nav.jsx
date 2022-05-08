import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return <div className='nav'>
      <Link className='nav__element' to='/'>Home</Link>
      <br/>
      <Link className='nav__element' to='/list'>Pokemon List</Link>
      <br/>
      <Link className='nav__element' to='/find'>Find your Pokemon</Link>
      <br/>
      <Link className='nav__element' to='/createPoke'>Create your Pokemon</Link>
      <br/>

    </div>
  }
}

export default Nav;