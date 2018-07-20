console.log('app.js is running')

const app = {
    title: "Shuffle App",
    subtitle: "JSX is running",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        render()
    }
}

const onShuffle = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const selectedOption = app.options[randomNumber]

    if(selectedOption) {
        alert(selectedOption)
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onShuffle}>Make your pick</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )
    
    ReactDOM.render(template, document.getElementById('root'))
}

render()