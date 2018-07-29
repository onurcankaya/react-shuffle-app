import React from 'react'

import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'

export default class App extends React.PureComponent {
  state = {
    options: [],
  }
  
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) !== -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({
      options: [],
    }))
  }

  handlePick = () => {
    const selectedOptionIndex = Math.floor(
      Math.random() * this.state.options.length
    )
    const selectedOption = this.state.options[selectedOptionIndex]
    alert(selectedOption)
  }

  handleRemoveOption = (selectedOption) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== selectedOption),
    }))
  }

  componentDidMount() {
    try {
      const json = window.localStorage.getItem('options')
      const options = JSON.parse(json)

      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (error) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      window.localStorage.setItem('options', json)
    }
  }

  render() {
    const subtitle = 'Put your choice in the hands of a computer'
    const { options } = this.state

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={options.length > 0} handlePick={this.handlePick} />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          handleRemoveOption={this.handleRemoveOption}
          options={options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}
