import 'core-js/es/set'
import 'core-js/es/map'
import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalLayout from './layout/default'
import './assets/styles/common.scss'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalLayout />
      </div>
    )
  }
}

ReactDOM.render( < App/ > , document.getElementById('root'))