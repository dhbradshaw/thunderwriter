import React, { Component } from 'react'
import wordCount from './wordCount'

const textKey = 'text'
const storage = window.localStorage

class TextEntry extends Component {
  constructor(props) {
    super(props)
    const value = storage.getItem(textKey) || 'Write text here!'
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
      style.backgroundColor = 'red'
    }
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
          style={style}
        />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default TextEntry
