import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../../actions/userActions'
import { StarBorder, Star } from '@material-ui/icons'

export const CardButton = ({ pokeId }) => {
  const pokemon = useSelector(state => state.userPokemon)
  const dispatch = useDispatch()

  const addFav = () => {
    dispatch(addFavorite(pokeId))
  }

  const removeFav = () => {
    dispatch(removeFavorite(pokemon, pokeId))
  }
  const renderContent = () => {
    switch (pokemon.indexOf(pokeId)) {
      case -1:
        return <StarBorder onClick={addFav}>Add Favorite</StarBorder>
      default:
        return <Star onClick={removeFav}>Remove</Star>
    }
  }
  return (renderContent())
}
