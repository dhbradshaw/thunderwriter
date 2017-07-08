import React, { Component } from 'react'
import Header from './Header'
import Preferences from './Preferences'
import TextEntry from './TextEntry'

const storage = window.localStorage
const appBackground = storage.getItem('appBackground') || '#446'
const headerBackground = storage.getItem('headerBackground') || '#334'
const textEntryBackground = storage.getItem('textEntryBackground') || '#88B'
const textEntryFontSize = storage.getItem('textEntryFontSize') || '1em'
const wordCountGoal = storage.getItem('wordCountGoal') || '500'

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

const textAreaStyle = {
  height: '50em',
  width: '50em',
  backgroundColor: textEntryBackground,
  fontSize: textEntryFontSize,
  marginTop: '20px',
}

class App extends Component {
  render() {
    return (
      <div className="App" style={appStyle}>
        <Header style={headerStyle} />
        <div style={fullHeight}>
          <Preferences />
          <TextEntry goal={wordCountGoal} style={textAreaStyle} />
        </div>
      </div>
    )
  }
}

export default App
