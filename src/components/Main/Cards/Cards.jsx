import React from 'react';
import { Card, CardMedia } from '@mui/material';

function Cards(props) {

console.log('esto es lo que me traen los props', props.value)

  return (
            <Card sx={{ width: 200, margin:1 }}>
           <CardMedia component="img" width="50" image={props.value.img} alt="img"/>
                <h3>{props.value.name}</h3>
                <h5>{props.value.id}</h5>
                <h5>{props.value.weight}</h5>
            </Card>
  )
}

export default Cards