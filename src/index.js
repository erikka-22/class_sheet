import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from './data/person.json';

function Sheet(props) {
  return (
    <div className="sheet">
      {props.value}
    </div>
  );
}

class Board extends React.Component {

  renderSheet(i) {
    return (
      <Sheet 
        value={this.props.sheets[i]}
        onClick={() => this.props.onClick()} 
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSheet(0)}
          {this.renderSheet(1)}
          {this.renderSheet(2)}
          {this.renderSheet(3)}
          {this.renderSheet(4)}
        </div>
        <div className="board-row">
          {this.renderSheet(5)}
          {this.renderSheet(6)}
          {this.renderSheet(7)}
          {this.renderSheet(8)}
          {this.renderSheet(9)}
        </div>
        <div className="board-row">
          {this.renderSheet(10)}
          {this.renderSheet(11)}
          {this.renderSheet(12)}
          {this.renderSheet(13)}
          {this.renderSheet(14)}
        </div>
        <div className="board-row">
          {this.renderSheet(15)}
          {this.renderSheet(16)}
          {this.renderSheet(17)}
          {this.renderSheet(18)}
          {this.renderSheet(19)}
        </div>
      </div>
    );
  }
}

class Classroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheets: Array(20).fill(null) 
    }
  }

  handleClick() {
    const sheets = this.state.sheets;
    const students = Data.class.students;
    for (let i = 0; i < 20; i++) {
      if (i % 2 === 1) {
        sheets[i] = students[Math.floor(Math.random() * students.length)]["name"];
      }
    }
    this.setState({
      sheets: sheets
    });
  }

  render() {
    const shuffle = '席替え';
    return (
      <div className="classroom">
        <div className="classroom-board">
          <Board 
            sheets={this.state.sheets}
          />
          <button onClick={() => this.handleClick()}>{shuffle}</button>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Classroom />,
  document.getElementById('root')
);
