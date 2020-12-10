import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header/Header'
import Table from './components/Lib/Table'
import Label from './components/Label/Label'
import { fetchPokemon } from './actions/getPoke'

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.paginator.count)
  const first = useSelector(state => state.paginator.first)
  useEffect(() => dispatch(fetchPokemon(first,count)))
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/api/lib" component={Table}/>
      <Route exact path="/" component={Label}/>
    </BrowserRouter>
  )
}

export default App
