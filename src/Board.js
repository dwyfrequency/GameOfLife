import React from 'react';

class GameOfLife {
  constructor(width, height) {
    this.width = height;
    this.height = height;
    this.board = this.makeBoard();
  }

  makeBoard() {
    const arr = [];
    for (let i = 0; i < this.height; i++) {
      const tempArr = [];
      for (let j = 0; j < this.width; j++) {
        tempArr.push(0);
      }
      arr.push(tempArr);
    }
    return arr;
  }
}

const Board = props => {
  const width = 25;
  const height = 20;
  const gameInstance = new GameOfLife(width, height);

  const gameBoard = gameInstance.board.map((innerArr, idx) => {
    const tds = innerArr.map((livingStatus, idx) => (
      <td key={`${livingStatus}-${idx}`}>{livingStatus}</td>
    ));
    return <tr key={`${innerArr}-${idx}`}>{tds}</tr>;
  });

  return (
    <table id="board">
      <tbody>{gameBoard}</tbody>
    </table>
  );
};

export default Board;
