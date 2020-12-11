import React from 'react';
import { Button, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../actions/authActions'
import { Login } from '../Auth/Login'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#b71c1c',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius:3
  },
  lable: {
    color: '#ffffff'
  }
}));

const Header = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const isAuth =  useSelector(state => state.isAuth)
  const handleClickLogout = () => {
    dispatch(logOut())
  }
  const renderContent = () => {
    switch (isAuth) {
      case null:
        return;
      case false:
        return <Login/>
      default:
        return <Button onClick={handleClickLogout} >Log out</Button>
    }
  }
  return (
    <Toolbar className={classes.root}>
      <Typography variant="h4" className={classes.lable}>Pokedex</Typography>
      <div>{renderContent()}</div>
    </Toolbar>
  );
};

export default Header;
