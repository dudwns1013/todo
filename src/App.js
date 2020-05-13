import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { TextField, Typography } from '@material-ui/core';
import {KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }
  }
  render() {
    return (
  
      <div className="App">
        <div className="header">TODO LIST</div>
        <paper className="input_area" variant="outlined" style={{padding: '10px'}}>
          <TextField label="제목" placeholder="제목을 입력해 주세요." size="normal" margin="normal" fullWidth required />
          <TextField label="상세내용" size="normal" margin="normal" fullWidth multiline />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={(value)=>console.log(value)}
            style={{width:'50%'}}
            KeyboardButtonProps={{
              'aria-label':'change date',
            }}
          />
          <KeyboardTimePicker
          margin="normal"
          label="시작시간"
          variant="inline"
          onChange={(value)=>console.log(value)}
          style={{width:'50%'}}
          KeyboardButtonProps={{
            'aria-label':'change time',
          }}
          />
        </paper>
        <div className="list_area">리스트 영역</div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © 홍길동 '+new Date().getFullYear()+'.'}
        </Typography>
      </div>
  
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}



export default App;
