import { createStore, applyMiddleware, compose } from 'redux';
//import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [promise];

export default (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
};