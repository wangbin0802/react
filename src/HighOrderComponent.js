import ReactDOM from "react-dom";
import React from "react";

function HighOrderComponent() {
    ReactDOM.render(
        <ListOfThenThings />,
        document.getElementById('root')
    );

}

const MyComponent = {
    DatePicker: function DatePicker(props) {
        return <div {...props}>Imagine a {props.color} datepicker here.</div>
    }
}

const Button = (props) => {
    const {kind, ...other} = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other}/>;
}

function Repeat(props) {
    let items = [];
    let show = true;
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{show && items}</div>;
}

function updateColorMap(colormap) {
    return Object.assign({}, colormap, {right: 'blue'});
}

function ListOfThenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.model.on('change', this.handleChange);
    }

    componentWillUnmount() {
        this.props.model.off('change', this.handleChange);
    }

    render() {
        return <li>{this.props.model.get('text')}</li>;
    }
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange();
    }

    handleChange() {
        this.forceUpdate();
    }

    componentDidMount() {
        this.props.collection.on('add', 'remove', this.handleChange);
    }

    componentWillUnmount() {
        this.props.collection.on('add', 'remove', this.handleChange);
    }

    render() {
        return (
            <ul>
                {this.props.collection.map(model => (
                    <Item key={model.cid} model={model}/>
                ))}
            </ul>
        )
    }
}

export default HighOrderComponent