import axios from 'axios'
const proxy = 'http://localhost:4000/'

const token = localStorage.getItem('token')

export const addFavorite = (pokeId) => async (dispatch) => {
  await axios.post(proxy + 'user/favorite', { pokeId }, {
    headers: {
      token: token
    }
  })
  dispatch({ type: 'ADD_FAVORITE', payload: pokeId })
}
export const removeFavorite = (pokemons, pokeId) => async (dispatch) => {
  await axios.patch(proxy + 'user/favorite', { pokeId }, {
    headers: {
      token: token
    }
  })
  const newPoke = pokemons.filter(pokemon => pokemon !== pokeId)
  dispatch({ type: 'REMOVE_FAVORITE', payload: newPoke })
}

// export const getFavorites = (token) => async (dispatch) => {
//   const favorites = await axios.get(proxy + 'user/favorite', {
//     headers: {
//       token: token
//     }
//   })
//   dispatch({ type: 'FETCH_FAVORITE', payload: favorites.data })
// }
