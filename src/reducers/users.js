import {handleActions} from 'redux-actions';
import {GET_USER} from 'src/actions/types'

const users = handleActions({
  [GET_USER]: (users, {payload}) => ({...users, 'user': payload}),
}, {users: {user: {name: ''}}});

export default users;