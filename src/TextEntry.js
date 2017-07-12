import React, { Component } from 'react'
import wordCount from './wordCount'

const textKey = 'text'
const storage = window.localStorage

const pStyle = { color: 'lightgrey', padding: 0, margin: 0 }

const defaultMessage =
  'Write text here.\n\nWant different colors or font? Double click to customize.'

const elapsed = (t0, t1) => Math.round((t1 - t0) / 1000)

class TextEntry extends Component {
  constructor(props) {
    super(props)
    const text = storage.getItem(textKey) || defaultMessage
    this.state = {
      baseCount: 0,
      count: wordCount(text),
      finished: false,
      t0: new Date(),
      tlast: new Date(),
      text: text,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTare = this.handleTare.bind(this)
  }
  netCount() {
    return this.state.count - this.state.baseCount
  }
  handleChange(event) {
    const text = event.target.value
    const count = wordCount(text)
    this.setState({ count, text })

    if (this.netCount() <= this.props.goal) {
      this.setState({ tlast: new Date() })
    } else {
      this.setState({ finished: true })
    }
    storage.setItem(textKey, text)
  }

  handleTare(event) {
    const t = new Date()
    this.setState({
      baseCount: this.state.count,
      t0: t,
      tlast: t,
    })
    event.preventDefault()
  }
  render() {
    const style = { ...this.props.style }
    let celebrate
    if (this.netCount() > this.props.goal) {
      style.backgroundColor = this.props.goalCompleteBackground
      celebrate = (
        <p style={pStyle}>
          Success {this.props.goal} in{' '}
          {elapsed(this.state.t0, this.state.tlast)} seconds
        </p>
      )
    }
    return (
      <form onSubmit={this.handleTare} style={{ paddingTop: '8px' }}>
        {celebrate}
        <p style={pStyle}>
          {this.netCount()} / {this.props.goal}
        </p>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          style={style}
        />
        <div>
          <input type="submit" value="Tare" />
        </div>
      </form>
    )
  }
}

export default TextEntry
