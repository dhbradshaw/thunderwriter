import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import TextEntry from './TextEntry'

const fullHeight = {
  height: '100%',
}

class App extends Component {
  render() {
    return (
      <div className="App" style={fullHeight}>
        <Header />
        <div style={fullHeight}>
          <TextEntry goal="500" />
        </div>
      </div>
    )
  }
}

export default App
