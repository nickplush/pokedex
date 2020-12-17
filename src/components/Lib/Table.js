import React from 'react'
import Grid from '@material-ui/core/Grid'
import TableCard from './TableCard'
import { Paginator } from './Paginator'
import { array, bool } from 'prop-types'
import Selector from './Selector'
import { useSelector } from 'react-redux'

const Table = ({ pokemons, display }) => {
  const types = useSelector(state => state.selector)
  return (
    <div>
      {Boolean(display && types === 'all') &&
        <Paginator/>
      }
      <Selector/>
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
