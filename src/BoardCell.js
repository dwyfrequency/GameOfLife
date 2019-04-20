import React from 'react';

const BoardCell = ({ livingStatus, rowIdx, colIdx }) => {
  return <td id={`${rowIdx}-${colIdx}`}>{livingStatus}</td>;
};

export default BoardCell;
