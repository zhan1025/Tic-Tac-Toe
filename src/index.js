/*
 * @Author: your name
 * @Date: 2020-01-21 14:22:42
 * @LastEditTime : 2020-01-21 18:06:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 一个按钮
function Square (props){
    return (
      <button 
      className="square" 
      onClick={ props.onClick}>
        {
          props.value
        }
      </button>
    );
}
// 渲染9个方块
class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext:  true,
    }
  }
  handleClick(i){
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X': 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    })
  }

  renderSquare(i) {
    return <Square 
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}/>;
  }

  render() {
    const status = `Next player:${this.state.xIsNext ? 'X': 'O'}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
// 棋盘
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
