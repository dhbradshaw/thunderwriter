import React, { Component } from 'react'
import Header from './Header'
import TextEntry from './TextEntry'

const storage = window.localStorage
const appBackground = storage.getItem('appBackground') || '#446'
const headerBackground = storage.getItem('headerBackground') || '#334'

const fullHeight = {
  height: '100%',
}

const appStyle = {
  backgroundColor: appBackground,
  textAlign: 'center',
  height: '100%',
}

const headerStyle = {
  backgroundColor: headerBackground,
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
