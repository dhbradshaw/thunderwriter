import React, { Component } from 'react'
import wordCount from './wordCount'

const storage = window.localStorage

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div
      style={{
        padding: '.5em',
        display: 'flex',
        flexDirection: 'row',
        justifyContents: 'spaceBetween',
        alignItems: 'center',
      }}
    >
      <label
        for={name}
        style={{ width: '14em', float: 'left', color: 'white' }}
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        style={{ maxWidth: '6em' }}
      />
    </div>
  )
}

class Preferences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      appBackground: storage.getItem('appBackground') || '#446',
      headerBackground: storage.getItem('headerBackground') || '#334',
      textEntryBackground: storage.getItem('textEntryBackground') || '#88B',
      wordCountAchievedTextEntryBackground:
        storage.getItem('wordCountAchievedTextEntryBackground') || 'red',
      textEntryFontSize: storage.getItem('textEntryFontSize') || '1em',
      wordCountGoal: storage.getItem('wordCountGoal') || '500',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    const fields = [
      'appBackground',
      'headerBackground',
      'textEntryBackground',
      'wordCountAchievedTextEntryBackground',
      'textEntryFontSize',
      'wordCountGoal',
    ]
    fields.map(f => storage.setItem(f, this.state[f]))
  }
  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ backgroundColor: 'grey' }}>
        <Input
          label={'App Background'}
          name={'appBackground'}
          type={'text'}
          value={this.state['appBackground']}
          onChange={this.handleInputChange}
        />
        <Input
          label={'Header Background'}
          name={'headerBackground'}
          type={'text'}
          value={this.state['headerBackground']}
          onChange={this.handleInputChange}
        />
        <Input
          label={'Text Entry Background'}
          name={'textEntryBackground'}
          type={'text'}
          value={this.state['textEntryBackground']}
          onChange={this.handleInputChange}
        />
        <Input
          label={'Goal Complete Text Entry Background'}
          name={'wordCountAchievedTextEntryBackground'}
          type={'text'}
          value={this.state['wordCountAchievedTextEntryBackground']}
          onChange={this.handleInputChange}
        />
        <Input
          label={'Text Entry Font Size'}
          name={'textEntryFontSize'}
          type={'text'}
          value={this.state['textEntryFontSize']}
          onChange={this.handleInputChange}
        />
        <Input
          label={'Word Count Goal'}
          name={'wordCountGoal'}
          type={'number'}
          value={this.state['wordCountGoal']}
          onChange={this.handleInputChange}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Preferences
