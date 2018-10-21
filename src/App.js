import React, { Component } from 'react';
import sudoku from 'sudoku-umd';
import Board from './components/Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialBoard: '',
      board: ''
    }
  }

  newGame() {
    const board = sudoku.generate("easy");

    this.setState({
      initialBoard: board,
      board
    });

    console.log(board);
  }

  changeHandler(index, value) {
    const board = this.state.board.slice(0, index) + value + this.state.board.slice(index + 1);

    this.setState({ board });
  }

  render() {
    return (
      <div className="App">
        <h1>Sudoku</h1>
        <Board data={this.state.board.split('')} changeHandler={this.changeHandler.bind(this)} />
        <div className="buttons">
          <button>Check</button>
          <button onClick={this.newGame.bind(this)}>New Game</button>
          <button>Solve</button>
          <button>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
