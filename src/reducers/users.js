import {handleActions} from 'redux-actions';
import {GET_USER} from 'src/actions/types'

const users = handleActions({
  [GET_USER]: (users, {payload}) => ({...users, [payload.id]: payload}),
}, {1: {name: ''}});

export default users;