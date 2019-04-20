import React from 'react';
import BoardCell from './BoardCell';

class GameOfLife {
  constructor(width, height) {
    this.width = width; // cols
    this.height = height; // rows
    this.board = this.makeBoard();
  }

  makeBoard() {
    const arr = [];
    for (let i = 0; i < this.height; i++) {
      const tempArr = [];
      for (let j = 0; j < this.width; j++) {
        tempArr.push('dead');
      }
      arr.push(tempArr);
    }
    return arr;
  }

  getCell(row, col) {
    const cell = this.board[row][col];
    if (cell) {
      return cell;
    }
  }
}

const Board = props => {
  const width = 25;
  const height = 20;
  const gameInstance = new GameOfLife(width, height);

  const gameBoard = gameInstance.board.map((innerArr, rowIdx) => {
    return (
      <tr key={`${innerArr}-${rowIdx}`} id={`row#${rowIdx}`}>
        {innerArr.map((livingStatus, colIdx) => (
          <BoardCell
            key={`${rowIdx}-${colIdx}`}
            rowIdx={rowIdx}
            colIdx={colIdx}
            livingStatus={livingStatus}
          />
        ))}
      </tr>
    );
  });

  return (
    <table id="board">
      <tbody>{gameBoard}</tbody>
    </table>
  );
};

export default Board;
