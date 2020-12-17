import React from 'react'
import { Button, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../actions/authActions'
import { Login } from '../Auth/Login'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#b71c1c',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    borderRadius: 3
  },
  lable: {
    color: '#ffffff'
  }
}))

const Header = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const isAuth = useSelector(state => state.token)
  const handleClickLogout = () => {
    dispatch(logOut())
  }
  const renderContent = () => {
    switch (isAuth) {
      case true:
        return (
          <div className={classes.root}>
            <Button href='/api/favorite'>favorite</Button>
            <Button onClick={handleClickLogout}>Log out</Button>
          </div>
        )
      case false:
        return <Login/>
    }
  }
  return (
    <Toolbar className={classes.root}>
      <Link to={'/'}>
        <Typography variant="h4" className={classes.lable}>Pokedex</Typography>
      </Link>
      <div>{renderContent()}</div>
    </Toolbar>
  )
}

export default Header
