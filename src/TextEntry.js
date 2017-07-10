import React, { Component } from 'react'
import wordCount from './wordCount'

const textKey = 'text'
const storage = window.localStorage

class TextEntry extends Component {
  constructor(props) {
    super(props)
    const value =
      storage.getItem(textKey) || 'Write text here. Double click to customize.'
    this.state = {
      value: value,
      count: wordCount(value),
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    const value = event.target.value
    const count = wordCount(value)
    this.setState({ count, value })
    storage.setItem(textKey, value)
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value)
    event.preventDefault()
  }
  render() {
    const style = { ...this.props.style }
    if (this.state.count > this.props.goal) {
      style.backgroundColor = this.props.goalCompleteBackground
    }
    return (
      <form onSubmit={this.handleSubmit} style={{ paddingTop: '8px' }}>
        <p style={{ color: 'lightgrey', padding: 0, margin: 0 }}>
          {this.state.count} / {this.props.goal}
        </p>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          style={style}
        />
        {/* <div>
          <input type="submit" value="Submit" />
        </div> */}
      </form>
    )
  }
}

export default TextEntry
