import { useState, useEffect } from 'react';

// returns either 1 or 0
const randomCellVal = () => Math.round(Math.random());
/*
Make a blank array of x slots, then of those x slots place an array of y slots
withing them. Populate those y slots with either a 1 or 0
*/
const createArray = (
  totalRows,
  totalColumns,
  fillCellCallback = randomCellVal
) =>
  Array.from({ length: totalRows }, () =>
    Array.from({ length: totalColumns }, () => fillCellCallback())
  );

export default function GameBoard(totalRows, totalColumns) {
  const [board, setBoard] = useState([]);

  function getCellValue(rowIdx, colIdx, row = board[rowIdx]) {
    // if the row exists then return the val at the row and column index
    // >> if the value is 1 return 1 << else return 0
    return row ? row[colIdx] || 0 : 0;
  }

  function countNeighbors(rowIdx, colIdx) {
    return (
      getCellValue(rowIdx - 1, colIdx - 1) +
      getCellValue(rowIdx - 1, colIdx + 1) +
      getCellValue(rowIdx - 1, colIdx) +
      getCellValue(rowIdx + 1, colIdx) +
      getCellValue(rowIdx + 1, colIdx - 1) +
      getCellValue(rowIdx + 1, colIdx + 1) +
      getCellValue(rowIdx, colIdx + 1) +
      getCellValue(rowIdx, colIdx - 1)
    );
  }

  function step() {
    const newBoard = [];
    for (let i = 0; i < totalRows; i++) {
      const innerArr = [];
      for (let j = 0; i < totalColumns; j++) {
        const currentCellVal = getCellValue(i, j);
        const totalNeighbors = countNeighbors(i, j);
        let newVal;
        if (currentCellVal === 1) {
          if (totalNeighbors < 2 || totalNeighbors > 3) {
            newVal = 0;
          }
        } else {
          newVal = totalNeighbors === 3 ? 1 : 0;
        }
        innerArr.push(newVal);
      }
      newBoard.push(innerArr);
    }
    setBoard(newBoard);
  }

  function resetGame() {
    setBoard(createArray(totalRows, totalColumns));
  }

  useEffect(() => {
    resetGame();
  }, [totalRows, totalColumns]);

  return { resetGame, board, step };
}
