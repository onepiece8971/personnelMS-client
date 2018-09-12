import { handleAction } from 'redux-actions';

const todoApp = handleAction(
  'TEST',
  (state, action) => ({
    todo: state.todo + 1
  }),
  {todo: 0}
);

export default todoApp;