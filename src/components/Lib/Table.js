import React from 'react'
import Grid from '@material-ui/core/Grid'
import TableCard from './TableCard'
import { Paginator } from './Paginator'
import { array, bool } from 'prop-types'

const Table = ({ pokemons, display }) => {
  return (
    <div>
      {Boolean(display) &&
        <Paginator/>
      }
        <Grid container spacing={12}
              justify="flex-start"
              alignItems="center">
          {pokemons.map((pokemon) => <TableCard key={Math.random()} data={pokemon}/>)}
        </Grid>
    </div>
  )
}

Table.propTypes = {
  pokemons: array,
  display: bool
}

export default Table
