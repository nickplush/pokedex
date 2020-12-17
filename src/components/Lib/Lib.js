import React from 'react'
import { useSelector } from 'react-redux'
import Table from './Table'

const Lib = () => {
  const pokemons = useSelector(state => state.pokemon)
  return <Table pokemons={pokemons} display={true}/>
}

export default Lib
