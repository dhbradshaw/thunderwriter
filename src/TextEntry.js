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
      timerHistory: [new Date()],
      tLastWord: new Date(),
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
      this.setState({ tLastWord: new Date() })
    } else {
      this.setState({ finished: true })
    }
    storage.setItem(textKey, text)
  }

  handleTare(event) {
    const t = new Date()
    this.setState({
      baseCount: this.state.count,
      timerHistory: [new Date()],
      tLastWord: t,
    })
    event.preventDefault()
  }
  togglePause(event) {
    this.setState({
      timerHistory: this.state.timerHistory.concat([new Date()]),
    })
    event.preventDefault()
  }
  paused() {
    return this.state.timerHistory.length % 2 === 0
  }
  render() {
    const style = { ...this.props.style }
    const paused = this.paused()
    let celebrate
    if (this.goalReached()) {
      style.backgroundColor = this.props.goalCompleteBackground
      celebrate = (
        <span>
          Success: {this.props.goal} word in{' '}
          {elapsed(this.state.timerHistory[0], this.state.tLastWord)} seconds.
        </span>
      )
    }
    if (paused) {
      style.backgroundColor = 'papayawhip'
    }
    return (
      <form
        onSubmit={e => this.handleTare(e)}
        style={{ paddingTop: '8px' }}
        onKeyPress={e => {
          if (e.key === 'T' && e.ctrlKey && e.altKey) {
            this.handleTare(e)
          }
          if (e.key === 'P' && e.ctrlKey && e.altKey) {
            this.togglePause(e)
          }
        }}
      >
        <p style={pStyle}>
          {celebrate} {this.netCount()} / {this.props.goal}{' '}
          <small>
            <Timer history={this.state.timerHistory} />{' '}
            {paused ? ' paused' : 'ticking'}
          </small>
        </p>
        <p />
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          style={style}
        />
        <div>
          <button onClick={e => this.togglePause(e)}>
            {paused ? 'Play' : 'Pause'}
          </button>
          <input type="submit" value="Tare" />
        </div>
      </form>
    )
  }
}

export default TextEntry
