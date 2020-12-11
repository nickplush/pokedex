import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'
import TableCard from './TableCard'
import { Paginator } from './Paginator'

const Table = () => {
  const pokemons = useSelector(state => state.pokemon)
  return (
    <div>
      <Paginator/>
        <Grid container spacing={8}
              direction="row"
              justify="flex-start"
              alignItems="center">
          {pokemons.map((pokemon) => <TableCard key={Math.random()} data={pokemon}/>)}
        </Grid>
    </div>
  )
}

export default Table
