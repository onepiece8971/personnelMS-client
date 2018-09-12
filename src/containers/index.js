import App from '../components/App'
import { test } from '../actions/index'
import { connect } from 'react-redux'

export default connect(
  state => {
    return {
      todo: state.todo,
    };
  },
  {test}
)(App);