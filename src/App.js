import React from 'react'
import {Switch, Route} from "react-router-dom"
// import '../assets/css/App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/header/header.component"
import Statusbar from "./components/statusbar/statusbar.component"

import HomePage from "./pages/homepage/homepage"
import NewFilePage from "./pages/new-file/new-file"

import "./App.scss"

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/new-file" component={NewFilePage} />
      </Switch>
      <Statusbar />
    </div>
  )
}

export default App
