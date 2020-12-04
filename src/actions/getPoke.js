import axios from 'axios';

export const fetchPokemon = () => async (dispatch) => {
  const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
  const pokeBase = pokemons.data.results.map(async (pokemon) => await axios(pokemon.url))
  const  pokeInfo = await Promise.all(pokeBase)
  dispatch({ type: 'FETCH_POKEMON', payload: pokeInfo });
};

