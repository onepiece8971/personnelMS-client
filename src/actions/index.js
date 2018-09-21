import {createAction} from 'redux-actions';
import {getUser as getUserApi} from 'src/api/users';
import {GET_USER} from './types'

const test = createAction('TEST');
const getUser = createAction(GET_USER, getUserApi);

export {test, getUser}