import React, { Component } from 'react'
import wordCount from './wordCount'

const textAreaStyle = {
  height: '50em',
  width: '50em',
  backgroundColor: '#88B',
  marginTop: '20px'
}

class TextEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'Hi there.',
      count: 2
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const value = event.target.value
    const count = wordCount(value)
    this.setState({ count, value })
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            {this.state.count} words
          </label>
        </div>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          style={textAreaStyle}
        />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default TextEntry
