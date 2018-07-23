class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      options: [1, 3, 5],
    }

    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleAddOption(e) {
    e.preventDefault()

    let option = e.target.elements.option.value.trim()

    if (option) {
      this.setState({ options: this.state.options.concat([option]) })
      e.target.elements.option.value = ''
      console.log(this.state.options)
    }
  }

  render() {
    const title = 'Shuffle'
    const subtitle = 'Put your choice in the hands of a computer'
    const { options } = this.state

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
  handleShuffle() {
    alert('handleShuffle')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShuffle}>Shuffle</button>
      </div>
    )
  }
}

class Options extends React.PureComponent {
  handleRemoveAll() {
    alert('handleRemove')
  }

  render() {
    const { options } = this.props

    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
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
  render() {
    const { handleAddOption } = this.props

    return (
      <form onSubmit={handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
