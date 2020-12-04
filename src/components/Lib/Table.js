import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux'
import TableCard from './Card';

const useStyles = makeStyles((theme) => ({
  label: {
    background: '#eee'
  },
  media: {
    height: 200
  }
}));

const Table = () => {
  const classes = useStyles();
  const pokemons = useSelector(state => state)||[]
  return (
    <div>
        <Grid container spacing={3}>
          {pokemons.map((pokemon) => <TableCard key={Math.random()} data={pokemon} classes={classes}/>)}
        </Grid>
    </div>
  );
};

export default Table;
