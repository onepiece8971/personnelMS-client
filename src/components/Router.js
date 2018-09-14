import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login'

const AppRouter = () => (
  <Router history={history}>
    <Route path="/" component={Login}/>
  </Router>
)

export default AppRouter