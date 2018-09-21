import { connect } from 'react-redux'
import Login from 'src/components/Login'
import { getUser } from 'src/actions/index'

export default connect(
  state => {
    return {
      users: state.users,
    }
  },
  {getUser}
)(Login)