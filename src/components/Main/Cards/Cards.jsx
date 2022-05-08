import React from 'react';
import { Card, CardMedia } from '@mui/material';

function Cards(props) {

console.log('esto es lo que me traen los props', props.value)

  return (
            <Card sx={{ width: 200, margin:1 }}>
           <CardMedia component="img" width="50" image={props.value.img} alt="img"/>
                <h3>Pokemon Name: {props.value.name}</h3>
                <h5>Id: {props.value.id}</h5>
                <h5>Weight: {props.value.weight}</h5>
                <h5>Type 1: {props.value.type1}</h5>
                <h5>Type 2: {props.value.type2}</h5>
            </Card>
  )
}

export default Cards