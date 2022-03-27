import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }

    render() {
        return (
            <button className="square"
                onClick={() => this.setState({ value: 'X' })}>
                {this.state.value}
            </button>
        )
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }

    render() {
        const status = "Next Play:x";
        return (
            <div>
                <div className="Status">{status}</div>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}



ReactDOM.render(<Game />, document.getElementById("root"));