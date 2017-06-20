import React, { Component } from 'react'

const textAreaStyle = {
  height: '50em',
  width: '50em',
  backgroundColor: '#88B',
  marginTop: '20px'
}

class TextEntry extends Component {
  render() {
    return (
      <textarea style={textAreaStyle}>
        Hi There
      </textarea>
    )
  }
}

export default TextEntry
