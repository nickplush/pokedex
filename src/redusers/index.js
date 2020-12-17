import { combineReducers } from 'redux'
import paginatorReducer from './paginatorReducer'
import fetchReducer from './fetchReducer'
import authReducer from './authReducer'
import userReducer from './userReducer'

export default combineReducers({
  paginator: paginatorReducer,
  pokemon: fetchReducer,
  token: authReducer,
  userPokemon: userReducer
})
