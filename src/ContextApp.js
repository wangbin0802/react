import ReactDOM from 'react-dom';
import React from 'react';
import ThemedButton from "./themed-button";
import {themes, ThemeContext} from "./theme-context";

function ContextApp() {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
}

function Toolbar(props) {
    // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
    // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
    // 因为必须将这个值层层传递所有组件。
    return (
        <div>
            <ThemedButton onClick={props.changeTheme}/>
        </div>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        }

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }
    }

    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default ContextApp;
