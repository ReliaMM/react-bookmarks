import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {BrowserRouter, Route} from 'react-router-dom'

const Root = () => {
  return (
    <BrowserRouter>
      <Route path={`/`} component={App}></Route>
    </BrowserRouter>
  )
}

ReactDOM.render( < Root/ > , document.getElementById('root'))