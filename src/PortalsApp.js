import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

/// 动态添加节点
function PortalsApp() {
    ReactDOM.render(
        <Parent/>,
        root
    );
}

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            clicks: state.clicks + 1
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks:{this.state.clicks}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child/>
                </Modal>
            </div>
        );
    }
}

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        modalRoot.append(this.el);
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

function Child() {
    return(<div className="modal">
        <button>Click</button>
    </div>);
}

export default PortalsApp;