import React, {useState} from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        };
        this.focusTextInput = () => {
            if (this.textInput) this.textInput.focus();
        }
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.setTextInputRef}/>
                <input type="button" value="Focus the text input" onClick={this.focusTextInput}/>
            </div>
        );
    }
}

function Example() {
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default CustomTextInput