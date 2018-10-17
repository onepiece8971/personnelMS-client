import {handleActions} from 'redux-actions';
import {GET_USER} from 'src/actions/types'

const users = handleActions({
  [GET_USER]: (users, {payload}) => ({...users, [payload.id]: payload}),
}, {});

export default users;