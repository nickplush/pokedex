import React from 'react';
import { Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#b71c1c',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(5)
  },
  lable: {
    color: '#ffffff'
  }

}));

const Header = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.root}>
      <Typography variant="h4" className={classes.lable}>Pokedex</Typography>
    </Toolbar>
  );
};

export default Header;
