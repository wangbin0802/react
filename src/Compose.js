import ReactDOM from 'react-dom';
import React from 'react';

function Compose() {
    ReactDOM.render(
        <WelcomeDialog/>,
        document.getElementById('root')
    );
}

function WelcomeDialog() {
    return (
        <div>
            <FancyBorder color="blue">
                <h1 className="Dialog-title">
                    Welcome
                </h1>
                <p className="Dialog-message">
                    Thank you for visiting our spacecraft
                </p>
            </FancyBorder>
            <SplitPane
                left={
                    <Contacts/>
                }
                right={
                    <Chat/>
                }/>
        </div>
    )
}

function Contacts() {
    return <h3>Contacts</h3>;
}

function Chat() {
    return <h3>Chat</h3>;
}

function FancyBorder(props) {
    return (
        <div className={'Fancyborder - ' + props.color}>
            {props.children}
        </div>
    )
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}


export default Compose;
