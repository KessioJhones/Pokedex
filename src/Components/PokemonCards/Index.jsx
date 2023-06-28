import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, CardActionArea } from '@mui/material';

const PokemonCards = ({ name, image, types }) => {
  const typeHandler = () => {
    if (types[1]) {
      return types[0].type.name + " " + types[1].type.name;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Pokemon"
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="capiton" component="div">
            {typeHandler()}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PokemonCards;
