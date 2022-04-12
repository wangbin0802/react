import {ThemeContext} from "./theme-context";
import React from 'react';

class ThemedButton extends React.Component {
    render() {
        let props = this.props;
        let theme = this.context;
        return (
            <button {...props} style={{background: theme.background}}>
                更换主题
            </button>
        )
    }
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton;