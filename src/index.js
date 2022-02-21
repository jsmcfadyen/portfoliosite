import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import App from "./App.js"
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
