import React, { Component } from 'react'
import Header from './Header'
import TextEntry from './TextEntry'

const fullHeight = {
  height: '100%',
}

const appStyle = {
  backgroundColor: '#446',
  textAlign: 'center',
  height: '100%',
}

const headerStyle = {
  backgroundColor: '#334',
  padding: '20px',
  color: 'white',
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <Header style={headerStyle} />
        <div style={fullHeight}>
          <TextEntry goal="500" />
        </div>
      </div>
    )
  }
}

export default App
