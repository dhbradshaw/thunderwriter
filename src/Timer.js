import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { now: new Date() }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  elapsed() {
    const now = this.state.now
    const then = this.props.history[0]
    const ms = now - then
    const seconds = ms / 1000
    return seconds
  }

  tick() {
    this.setState({
      now: new Date(),
    })
  }

  render() {
    return <span>{Math.round(this.elapsed())}</span>
  }
}

export default Timer
