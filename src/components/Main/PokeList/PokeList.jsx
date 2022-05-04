import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';


class Pokelist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pokeLista: this.props.defaultList 
        }
        // Event binding (Bindear eventos)
        console.log('CONSTRUCTOR')
    }
    
    async componentDidMount(){

        const resp = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const data = await resp.data;
        this.setState({
            pokeLista: data.results
        })
        console.log('componentDidMount');
    }

    
    componentDidUpdate(prevProps, prevState){
        console.log('prevProps: ', prevProps, 'prevState: ', prevState);
        console.log("Estado final:",this.state.pokeLista);
        console.log("Props final;",this.props.defaultList);
        console.log('componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handlerLoadPokemons = async () => {
        this.setState({
            pokeLista: this.props.defaultList
        })
    }

    handlerResetPokemons = () => {
        this.setState({
            pokeLista: []
        })
    }

    handlerUpdate = () => {
        this.forceUpdate()
    }

    render() {
        console.log('RENDER')
        return (
            <div className='list_cards'>
                <h1>Lista Pokemon</h1>
                {
                  this.state.pokeLista.map(pokemon => 
                    <Card sx={{ width: 500, margin:1.2 }}>
                    <Fragment key={pokemon.name} >
                        <a href={pokemon.url} alt={pokemon.name + 'image'}> {pokemon.name} </a>
                        <p>{pokemon.url}</p>
                    </Fragment>
                    </Card>
                  )
                }
            </div>        
        );
    }
}

Pokelist.defaultProps = {
    defaultList: []
}

export default Pokelist;
