import React from 'react';

const BoardCell = ({ livingStatus, rowIdx, colIdx }) => {
  return <td id={`${rowIdx}-${colIdx}`} data-status={livingStatus} />;
};

export default BoardCell;
