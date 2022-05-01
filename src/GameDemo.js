import ReactDOM from 'react-dom';
import React from 'react';
import Board from "./model/Board";
import './model/game.css';
import Script from 'react-load-script';
function GameDemo() {
    ReactDOM.render(
        <Game />,
        document.getElementById('root')
    );
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}

export default GameDemo;