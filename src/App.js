import React, { Component } from 'react'
import './App.css'
import TextEntry from './TextEntry'

const fullHeight = {
  height: '100%'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={fullHeight}>
        <div className="App-header">
          <h2>ThunderWrite</h2>
        </div>
        <div style={fullHeight}>
          <TextEntry />
        </div>
      </div>
    )
  }
}

export default App
