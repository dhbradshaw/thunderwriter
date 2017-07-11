import React, { Component } from 'react'
import Header from './Header'
import Preferences from './Preferences'
import TextEntry from './TextEntry'

const storage = window.localStorage
const appBackground = storage.getItem('appBackground') || '#668'
const headerBackground = storage.getItem('headerBackground') || '#446'
const textEntryBackground = storage.getItem('textEntryBackground') || '#AAC'
const wordCountAchievedTextEntryBackground =
  storage.getItem('wordCountAchievedTextEntryBackground') || 'red'
const textEntryFontSize = storage.getItem('textEntryFontSize') || '1em'
const wordCountGoal = storage.getItem('wordCountGoal') || '500'

const fullHeight = {
  height: '100%',
}

const appStyle = {
  backgroundColor: appBackground,
  textAlign: 'center',
  paddingBottom: '400px',
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
  // border: 'none',
  padding: '.25em',
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { showPreferences: false }

    this.togglePreferences = this.togglePreferences.bind(this)
  }
  togglePreferences() {
    this.setState({ showPreferences: !this.state.showPreferences })
  }
  render() {
    return (
      <div
        className="App"
        style={appStyle}
        onDoubleClick={this.togglePreferences}
      >
        <Header style={headerStyle} />
        <div style={fullHeight}>
          {this.state.showPreferences ? <Preferences /> : null}
          <TextEntry
            goal={wordCountGoal}
            style={textAreaStyle}
            goalCompleteBackground={wordCountAchievedTextEntryBackground}
          />
        </div>
      </div>
    )
  }
}

export default App
