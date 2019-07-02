import 'core-js/es/set'
import 'core-js/es/map'
import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import GlobalLayout from './layout/default'
import rootReducer from './reducers'
import './assets/styles/common.scss'

let store = createStore(rootReducer)
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <GlobalLayout />
       </div>
      </Provider>
    )
  }
}
ReactDOM.render( < App/ > , document.getElementById('root'))