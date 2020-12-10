import { combineReducers } from 'redux';
import paginatorReducer from './paginatorReducer'
import fetchReducer from './fetchReducer'

export default combineReducers({
  paginator: paginatorReducer,
  pokemon: fetchReducer
});
