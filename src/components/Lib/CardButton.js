import React from 'react'
import { useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../../actions/userActions'
import { StarBorder, Star } from '@material-ui/icons'

export const CardButton = ({ pokeId }) => {
  const user = useSelector(state => state.token)
  const addFav = () => {
    addFavorite(pokeId,user._id)
  }

  const removeFav = () => {
    removeFavorite(pokeId,user._id)
  }
  const renderContent = () => {
    switch (user.favorites.indexOf(pokeId)) {
      case -1:
        return <StarBorder onClick={addFav}>Add Favorite</StarBorder>
      default:
        return <Star onClick={removeFav}>Remove</Star>
    }
  }
  return (renderContent())
}
