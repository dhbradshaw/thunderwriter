import React, { Component } from 'react'
import wordCount from './wordCount'
import Timer from './Timer'

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
      timeHistory: [new Date()],
      tlast: new Date(),
      text: text,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTare = this.handleTare.bind(this)
  }
  netCount() {
    return this.state.count - this.state.baseCount
  }
  goalReached() {
    const net = this.netCount()
    const goal = this.props.goal
    if (net > goal) {
      return true
    }
    if (net - goal === 0) {
      // If last character isn't a digit or letter, then you
      // have finished the word, so you're done!
      const last = this.state.text.slice(-1)
      if (!/[A-Za-z0-9]/.exec(last)) {
        return true
      }
    }
    return false
  }
  handleChange(event) {
    const text = event.target.value
    const count = wordCount(text)
    this.setState({ count, text })

    if (this.goalReached()) {
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
      timeHistory: [new Date()],
      tlast: t,
    })
    event.preventDefault()
  }
  render() {
    const style = { ...this.props.style }
    let celebrate
    if (this.goalReached()) {
      style.backgroundColor = this.props.goalCompleteBackground
      celebrate = (
        <span>
          Success: {this.props.goal} word in{' '}
          {elapsed(this.state.timeHistory[0], this.state.tlast)} seconds.
        </span>
      )
    }
    return (
      <form
        onSubmit={this.handleTare}
        style={{ paddingTop: '8px' }}
        onKeyPress={e => {
          if (e.key === 'T' && e.ctrlKey && e.altKey) {
            this.handleTare(e)
          }
        }}
      >
        <p style={pStyle}>
          {celebrate} {this.netCount()} / {this.props.goal}
        </p>
        <p><Timer history={[new Date()]} /></p>
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
