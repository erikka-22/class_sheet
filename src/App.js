import React, {Component} from 'react';

import Data from './data/person.json';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Item from '@mui/material/Item';

function Sheet(props) {
  return (
    <Grid item xs={3} className="sheet">
      {props.value}
    </Grid>
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
      <Grid container maxWidth="sm" spacing={2}>
        {/* <Grid container spacing={1}> */}
          {this.renderSheet(0)}
          {this.renderSheet(1)}
          {this.renderSheet(2)}
          {this.renderSheet(3)}
        {/* </Grid> */}
        {/* <Grid container spacing={1}> */}
          {this.renderSheet(4)}
          {this.renderSheet(5)}
          {this.renderSheet(6)}
          {this.renderSheet(7)}
        {/* </Grid> */}
        {/* // <Grid container spacing={1}> */}
          {this.renderSheet(8)}
          {this.renderSheet(9)}
          {this.renderSheet(10)}
          {this.renderSheet(11)}
        {/* </Grid> */}
        {/* // <Grid container spacing={1}> */}
          {this.renderSheet(12)}
          {this.renderSheet(13)}
          {this.renderSheet(14)}
          {this.renderSheet(15)}
        {/* // </Grid> */}
      </Grid>
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
        {/* <div className="blackbord">
          <img src={`${process.env.PUBLIC_URL}/school_sensei_kokuban_woman.png`} alt="blackbord"/>
        </div> */}
        <div className="classroom-board">
          <Board 
            sheets={current.sheets}
          />
          <Button 
            onClick={() => this.handleClick()}
            color="primary"
            variant="contained"
          >
            {shuffle}
          </Button>
        </div>
        {/* <div>{status}</div> */}
      </div>
    );
  }
}

export default Classroom;