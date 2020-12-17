import React, { useEffect, useState } from 'react'
import Table from './Table'
import { getFav } from '../../actions/getPoke'
import { useSelector } from 'react-redux'

const Favorite = () => {
  const favorites = useSelector(state => state.userPokemon)
  const [a, setA] = useState([])

  console.log('LOOOG', 'aaaaaa')

  useEffect(() => {
    fetchFavoritesPokemons()
  }, [favorites])

  const fetchFavoritesPokemons = async () => {
    const getPokemonsInfoPromises = favorites.map(getFav)
    const pokemonsInfo = await Promise.all(getPokemonsInfoPromises)
    setA(pokemonsInfo)
  }
  return <Table pokemons={a} display={false}/>
}

export default Favorite
