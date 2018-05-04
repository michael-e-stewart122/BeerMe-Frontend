import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import BackImage from "./components/BackImage"
import Searching from "./components/Searching"
// import components here
// define baseURL here

class App extends Component {
  render() {
    return (
      <div className="App">
        <BackImage />
        <Navbar />
        <Layout />
        <Searching />
      </div>
    )
  }
}

export default App
