class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      options: props.options,
    }

    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) !== -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }))
  }

  handleDeleteOptions() {
    this.setState(() => ({
      options: [],
    }))
  }

  handlePick() {
    const selectedOptionIndex = Math.floor(
      Math.random() * this.state.options.length
    )
    const selectedOption = this.state.options[selectedOptionIndex]
    alert(selectedOption)
  }

  render() {
    const subtitle = 'Put your choice in the hands of a computer'
    const { options } = this.state

    return (
      <div>
        <Header subtitle={subtitle} />
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

App.defaultProps = {
  options: [],
}

const Header = ({ title, subtitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'Shuffle',
}

const Action = ({ handlePick, hasOptions }) => {
  return (
    <div>
      <button disabled={!hasOptions} onClick={handlePick}>
        Shuffle
      </button>
    </div>
  )
}

const Options = ({ handleDeleteOptions, options }) => {
  return (
    <div>
      <button onClick={handleDeleteOptions}>Remove all</button>
      {options.map((option) => {
        return <Option option={option} key={option} />
      })}
    </div>
  )
}

const Option = ({ option }) => {
  return <div>{option}</div>
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
    const error = this.props.handleAddOption(option)

    if (error) {
      this.setState(() => ({ error }))
    } else {
      this.setState(() => ({ error: '' }))
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
