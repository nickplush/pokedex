import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Header from './components/Header/Header';
import Table from './components/Lib/Table';
import Label from './components/Label/Label';
import { fetchPokemon } from './actions/getPoke'


const App = () => {
 const dispatch = useDispatch()
  useEffect(()=>dispatch(fetchPokemon()))
    return (
      <BrowserRouter>
        <Header />
        <Route path="/api/lib" component={Table} />
        <Route exact path="/" component={Label} />
      </BrowserRouter>
    );
  }


export default App;
