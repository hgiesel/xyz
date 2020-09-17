import React from 'react'

import './tictactoe.css'

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)

    const grid = Array.from(Array(this.props.colums))
      .map(_ => Array(this.props.rows))

    this.state = { grid }
  }
  render() {
    return this.renderGrid(this.state.grid)
  }

  renderGrid(grid) {
    return grid.map(row => (
      <div className="board-row">
        {row.map(cell => this.renderSquare(cell))}
      </div>
    ))
  }

  renderSquare(i) {
    return <Square value={i} />
  }
}

class GameHistory extends React.Component {
  render() {
    return null
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <GameHistory rows={3} columns={3} />
        </div>
      </div>
    )
  }
}
