import React from 'react'
import configureStore from 'src/store/configureStore'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import AppRouter from 'src/routers/AppRouter'

let store = configureStore()

const App = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

export default process.env.NODE_ENV === 'development' ? hot(module)(App) : App
