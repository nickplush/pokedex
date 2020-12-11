import { combineReducers } from 'redux'
import paginatorReducer from './paginatorReducer'
import fetchReducer from './fetchReducer'
import authReducer from './authReducer'

export default combineReducers({
  paginator: paginatorReducer,
  pokemon: fetchReducer,
  isAuth: authReducer
})
