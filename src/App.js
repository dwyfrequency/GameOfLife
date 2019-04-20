import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  onCellClick(e) {
    console.log('pre', e.target);
    if (e.target.dataset.status === 'dead') {
      e.target.className = 'alive';
      e.target.status = 'alive';
    } else {
      e.target.className = 'dead';
      e.target.status = 'dead';
    }
    console.log('post', e.target);
  }
  render() {
    return (
      <div className="App">
        <div id="container">
          <h1>Game of Life</h1>
          {/* <table id="board" /> */}
          <Board onCellClick={this.onCellClick} />

          <div id="control_panel">
            <button id="step_btn" className="button">
              Step
            </button>
            <button id="play_btn" className="button">
              Play
            </button>
            <button id="random_btn" className="button">
              Randomize Board
            </button>
            <button id="clear_btn" className="button">
              Clear
            </button>
          </div>

          <footer>
            <p>
              Built by Jackie D at{' '}
              <a href="http://www.fullstackacademy.com/">Fullstack Academy</a>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
