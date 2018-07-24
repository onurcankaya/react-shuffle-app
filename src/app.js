class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      options: [1, 3, 5],
    }

    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (!this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option]),
      }
    })
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      }
    })
  }

  handlePick() {
    const selectedOptionIndex = Math.floor(
      Math.random() * this.state.options.length
    )
    const selectedOption = this.state.options[selectedOptionIndex]
    alert(selectedOption)
  }

  render() {
    const title = 'Shuffle'
    const subtitle = 'Put your choice in the hands of a computer'
    const { options } = this.state

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={options.length > 0} handlePick={this.handlePick} />
        <Options
          options={options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

class Header extends React.PureComponent {
  render() {
    const { title, subtitle } = this.props

    return (
      <div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.PureComponent {
  render() {
    const { handlePick, hasOptions } = this.props

    return (
      <div>
        <button disabled={!hasOptions} onClick={handlePick}>
          Shuffle
        </button>
      </div>
    )
  }
}

class Options extends React.PureComponent {
  render() {
    const { handleDeleteOptions, options } = this.props

    return (
      <div>
        <button onClick={handleDeleteOptions}>Remove all</button>
        {options.map((option) => {
          return <Option option={option} key={option} />
        })}
      </div>
    )
  }
}

class Option extends React.PureComponent {
  render() {
    const { option } = this.props

    return <div>{option}</div>
  }
}

class AddOption extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
    }

    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    e.target.elements.option.value = ''
    const error = this.props.handleAddOption(option)

    if (error) {
      this.setState(() => {
        return { error }
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
