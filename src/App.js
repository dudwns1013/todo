import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import moment from 'moment';
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

    // this.timeChange = this.timeChange.bind(this);
    
  }

  titleChange = e => {
    this.setState({
        title: e.target.value,
    });
    
  }
  

  contentChange = e => {
    this.setState({
        content: e.target.value,
    });
    
  }

  dateChange = (value) => {
    var date = value.format('YYYY-MM-DD');
    this.setState({
        startDate:date
    }); 
    
  }

 

  timeChange = (value) => {
    this.setState({
        startTime: value.format('HH:mm')
    });
    
  }

  render() {
    const {title}=this.state.title;
    const {content}=this.state.content;

    console.log("state.title : ", this.state.title);
    console.log("state.content : ", this.state.content);
    console.log("state.startDate : ", this.state.startDate);
    console.log("state.startTime : ", this.state.startTime);
    
    // console.log("state :"+this.state)

    return (

      <div className="App">
        <div className="header">TODO LIST</div>
        <paper className="input_area" variant="outlined" style={{padding: '10px'}}>
          <TextField 
            label="제목" 
            placeholder="제목을 입력해 주세요." 
            name="title"
            value={title}
            onChange={this.titleChange}
            size="normal" 
            margin="normal" 
            fullWidth required />

          <TextField 
            label="상세내용"
            name="content"
            value={content}
            onChange={this.contentChange} 
            size="normal" 
            margin="normal" 
            fullWidth multiline />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={this.dateChange}
            style={{width:'50%'}}
            KeyboardButtonProps={{
              'aria-label':'change date',
            }}
          />

          <KeyboardTimePicker
          margin="normal"
          label="시작시간"
          variant="inline"
          onChange={this.timeChange}
          style={{width:'50%'}}
          KeyboardButtonProps={{
            'aria-label':'change time',
          }}
          />
        </paper>
        <div className="list_area">리스트 영역</div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © 유영준 '+new Date().getFullYear()+'.'}
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
