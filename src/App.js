import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
    const posts = [
        {id: 1, title: 'hello world', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ]
    ReactDOM.render(
        <Blog posts={posts}/>,
        document.getElementById('root')
    );
}

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    );
    const content = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </li>
            )}
        </ul>
    );
    return(
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    )
}


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li>{number}</li>);

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
                {listItems}
            </div>
        );
    }
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }

    return <UserGreetingGuide/>
}

function UserGreeting() {
    return <h1>Welcome back!</h1>
}

function UserGreetingGuide() {
    return <h1>Please sign up</h1>
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: false,
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('componentWillUnmount');
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <div>
                <h1>hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <input onBlur={(e) => {
                    console.log('onBlur on input');
                }}/>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

function formatDate(date) {
    return date.toLocaleDateString();
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}/>
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}/>,
//     document.getElementById('root')
// );

export default App;
