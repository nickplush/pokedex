import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Label from './components/Label/Label'
import { fetchPokemon } from './actions/getPoke'
import Lib from './components/Lib/Lib'
import Favorite from './components/Lib/Favorite'
import { checkAuth } from './actions/authActions'

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.token)
  const filter = useSelector(state => state.selector)
  console.log('LOOOG', 'a')
  const start = () => {
    dispatch(fetchPokemon(first, count, filter))
    dispatch(checkAuth(isAuth))
  }
  const count = useSelector(state => state.paginator.count)
  const first = useSelector(state => state.paginator.first)
  useEffect(() => start())
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/api/lib" component={Lib}/>
        <Route path="/api/favorite" component={Favorite}/>
        <Route exact path="/" component={Label}/>
        <Redirect to={'/'}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
