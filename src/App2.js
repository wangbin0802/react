import ReactDOM from 'react-dom';
import React from 'react';

function App2() {

    ReactDOM.render(
        <Calculator/>,
        document.getElementById('root')
    );
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil</p>
    }
    return <p>The water would not boil</p>
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            temperature: e.target.value,
        })
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

export default App2;
