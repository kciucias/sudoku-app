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
  }

  solve() {
    const solveBoard = sudoku.solve(this.state.initialBoard);

    this.setState({ board: solveBoard });
  }

  restart() {
    this.setState({ board: this.state.initialBoard });
  }

  check() {
    if (this.state.board.indexOf('.') === -1) {
      const isSolved = sudoku.solve(this.state.board);

      if (isSolved) {
        alert('Dobrze Ci poszło!');
      } else {
        alert('Gdzieś zrobiłeś błąd :(');
      }
    } else {
      alert('Rozwiąż sudoku do końca !!');
    }
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
          <button onClick={this.check.bind(this)}>Check</button>
          <button onClick={this.newGame.bind(this)}>New Game</button>
          <button onClick={this.solve.bind(this)}>Solve</button>
          <button onClick={this.restart.bind(this)}>Restart</button>
        </div>
      </div>
    );
  }
}

export default App;
