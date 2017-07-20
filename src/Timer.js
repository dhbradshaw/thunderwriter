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

  dt(t0, t1) {
    const secondsApart = (t1 - t0) / 1000
    return secondsApart
  }

  elapsed(t, history) {
    const l = history.length
    let total = 0
    for (let i = 0; i < l; i += 2) {
      let t0 = history[i]
      if (t0 > t) {
        break
      }
      let t1 = Math.min(history[i + 1] || t, t)
      total += this.dt(t0, t1)
    }
    return total
  }

  tick() {
    this.setState({
      now: new Date(),
    })
  }

  render() {
    return (
      <span>
        {Math.round(this.elapsed(this.state.now, this.props.history) / 60)}m
      </span>
    )
  }
}

export default Timer
