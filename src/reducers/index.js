import {combineReducers} from 'redux';
import users from './users';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  users,
});

export default rootReducer;