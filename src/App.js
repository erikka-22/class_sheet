import React, {Component} from 'react';

import Data from './data/person.json';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import GenericTemplate from "./components/templates/GenericTemplate";
// import Header from './Header.js';

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
        {this.renderSheet(0)}
        {this.renderSheet(1)}
        {this.renderSheet(2)}
        {this.renderSheet(3)}
        {this.renderSheet(4)}
        {this.renderSheet(5)}
        {this.renderSheet(6)}
        {this.renderSheet(7)}
        {this.renderSheet(8)}
        {this.renderSheet(9)}
        {this.renderSheet(10)}
        {this.renderSheet(11)}
        {this.renderSheet(12)}
        {this.renderSheet(13)}
        {this.renderSheet(14)}
        {this.renderSheet(15)}
      </div>
    );
  }
}

class Classroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        sheets: Array(16).fill(null)
      }],
      students: Data.class.students
    }
  }

  handleClick() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const sheets = current.sheets.slice();
    let students = this.state.students;
    let hit_students_id = [];
    let n = 0;
    let i = 0;
    while (hit_students_id.length < 8) {
      if (n % 4 === 3 || n % 4 === 0) {
        i = 2 * n + 1;
      } else {
        i = 2 * n;
      }
      let j = Math.floor(Math.random() * students.length);
      console.log(hit_students_id);
      if (hit_students_id.includes(j)) {
        continue;  
      }
      hit_students_id.push(j);
      sheets[i] = students[j].name;
      n++;
    }
    this.setState({
      history: history.concat([{
        sheets: sheets
      }])
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const shuffle = '席替え';
    return (
      <div className="classroom">
        <GenericTemplate title="Who is in your side?">
          <div className="classroom-board">
            <Grid
              container
              alignItems="center"
              justify="center"
              spacing={0}
              collumns={4}
            >
              <Grid item xs={6}>
                <Board 
                  sheets={current.sheets}
                />
              </Grid>
            </Grid>
            
            <Button 
              onClick={() => this.handleClick()}
              color="primary"
              variant="contained"
            >
              {shuffle}
            </Button>
          </div>
        </GenericTemplate>
        {/* <div>{status}</div> */}
      </div>
    );
  }
}

export default Classroom;