import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AutoSizer } from 'react-virtualized';
import * as serviceWorker from './serviceWorker';
import GameBoard from './GameBoard';

const App = props => {
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(40);
  const [interval, setInterval] = useState(100);
  const { board, resetGame, step } = GameBoard(width, height);
  // const { started, toggle } = useTimer(step, interval);
  return (
    <div className="container">
      <div className="overlay">
        <pre>
          {' width:   '}
          <input
            type="range"
            min="1"
            max="100"
            value={width}
            onChange={e => setWidth(e.target.value)}
          />{' '}
          <br />
          {' height:   '}
          <input
            type="range"
            min="1"
            max="100"
            value={height}
            onChange={e => setHeight(e.target.value)}
          />{' '}
          <br />
          {' time:   '}
          <input
            type="range"
            min="10"
            max="1000"
            value={interval}
            onChange={e => setInterval(e.target.value)}
          />{' '}
        </pre>
        <button className="btn-emoji" onClick={() => 'reset'} alt="Reset">
          ⏮
        </button>
        <button className="btn-emoji" onClick={() => 'toggle'} alt="Play/Pause">
          {'started' ? '⏸' : '▶️'}
        </button>
      </div>
      <div className="gameBoard">
        <AutoSizer>
          {({ width, height }) => {
            const dimensions = Math.min(width, height);
            const style = {
              width: dimensions, // react will assume px if no unit is specified
              height: dimensions,
            };
            return (
              <table style={style}>
                <tbody>
                  {board.map((tableRow, rowIdx) => {
                    return (
                      <tr key={`rowIdx: ${rowIdx}`}>
                        {tableRow.map((cellVal, colIdx) => (
                          <td
                            key={`${rowIdx}-${colIdx}`}
                            style={{
                              backgroundColor: cellVal ? 'blue' : 'white',
                            }}
                          />
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
