import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/";
import PokemonCards from "../Components/PokemonCards/Index";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const endpoints = [];
      for (let i = 1; i <= 150; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      console.log(endpoints);

      const responses = await Promise.all(endpoints.map((endpoint) => axios.get(endpoint)));
      const pokemonData = responses.map((response) => response.data);
      setPokemons(pokemonData);
    } catch (error) {
      console.log(error);
    }
  };

  const pokemonFilter = (name) => {
    if (name === "") {
      getPokemons();
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.name.includes(name)
      );
      setPokemons(filteredPokemons);
    }
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            {pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemonCards name={pokemon.name} image={pokemon.sprites.front_default} types={pokemon.types} />
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
  );
};

export default Home;
