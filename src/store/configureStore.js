//import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
//import promise from 'redux-promise';
import reducer from '../reducers';

//const middlewares = [thunk, promise];

export default (initialState) => {
  return createStore(reducer, initialState);
};