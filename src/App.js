import React, { Component } from 'react';
import './App.css';
import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="container">
          <h1>Game of Life</h1>
          {/* <table id="board" /> */}
          <Board />

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
