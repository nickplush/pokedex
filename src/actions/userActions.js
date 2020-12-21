import axios from 'axios'

export const addFavorite = async (pokeId, userId) => {
  await axios.post('http://localhost:5000/api/favorite/', { pokeId, userId })
}
export const removeFavorite = async (pokeId, userId) => {
  await axios.patch('http://localhost:5000/api/favorite/', { pokeId, userId })
}
