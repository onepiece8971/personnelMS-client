import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from 'src/components/Login'

const AppRouter = () => (
  <Router>
    <Route path="/" component={Login}/>
  </Router>
)

export default AppRouter