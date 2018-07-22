class App extends React.PureComponent {
  render() {
    const title = 'Shuffle'
    const subtitle = 'Put your choice in the hands of a computer'
    const options = [1, 3, 5]

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
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
    return (
      <div>
        <button>Shuffle</button>
      </div>
    )
  }
}

class Options extends React.PureComponent {
  render() {
    const { options } = this.props

    return (
      <ol>
        {options.map((option) => {
          return <Option option={option} key={option} />
        })}
      </ol>
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
    return (
      <form>
        <input type="text" />
        <button>Add Option</button>
      </form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
