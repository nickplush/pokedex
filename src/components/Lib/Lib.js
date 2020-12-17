import React from 'react'
import { useSelector } from 'react-redux'
import Table from './Table'
import { Paginator } from './Paginator'
import Selector from './Selector'

const Lib = () => {
  const types = useSelector(state => state.selector)
  const pokemons = useSelector(state => state.pokemon)
  return (
    <>
    <div className={'funcBar'}>
      {types === 'all' &&
      <Paginator/>
      }
      <Selector/>
    </div>
      <Table pokemons={pokemons} display={true}/>
    </>
  )
}

export default Lib
