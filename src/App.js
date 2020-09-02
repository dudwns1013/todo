import React from 'react';
//import logo from './logo.svg';
import './App.css';
import InputForm from './components/inputform.js';
// import moment from 'moment';
import { Typography , List, ListItem, ListItemText } from '@material-ui/core';
import moment from 'moment';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.localStorage = window.localStorage;
    const getItem = localStorage.getItem("todolist_state");
    if(getItem){
      this.state = JSON.parse(getItem);
    }else{
      this.state={
        todoList: []
      }
    }
    


    // this.timeChange = this.timeChange.bind(this);
    
  }

  addTodoList(data){
    const nowList = this.state.todoList;
    nowList.push(data);
    this.setState({
      todoList:nowList,
    },()=>{
      const stringState = JSON.stringify(this.state)
      localStorage.setItem("todolist_state",stringState);
    });
  }

  saveTodoList(){
    const nowList = this.state.todoList;
    const {title, content, startDate,startTime,endDate,endTime} = this.state;
    nowList.push({
      title, content, startDate,startTime,endDate,endTime
    });
    this.setState({
      todoList: nowList,
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null
    }, ()=>console.log(this.state))
  }

  test(data){
    console.log("부모 호출",data,this);

    this.setState({
      data
    })
  }

  render() {

    

    // console.log("state.title : ", this.state.title);
    // console.log("state.content : ", this.state.content);
    // console.log("state.startDate : ", this.state.startDate);
    // console.log("state.startTime : ", this.state.startTime);
    
    // console.log("state :"+this.state)

    return (
      
      <div className="App">
        <div className="header">AWS 실습</div>
        <InputForm addTodoList={this.addTodoList.bind(this)}/>
        <div className="list_area">리스트 영역
          <List>
            {this.state.todoList.map((todoItem, idx)=>{
              let {
                title, content, startDate, startTime, endDate, endTime
              } = todoItem;

              if((typeof startDate && typeof startTime && typeof endDate && typeof endTime) === "string"){
                startDate = moment(startDate);
                endDate = moment(endDate);
                startTime = moment(startTime);
                endTime = moment(endTime);
              }
              //console.log(startDate);
              const checkToday = moment().isBetween(startDate, endDate);
              const checkF = (moment().diff(startDate)<0);
              const checkB = (moment().diff(endDate)>0);

              let fontColor = "black";
              if(checkToday) fontColor = "blue";
              if(checkF) fontColor = "grey";
              if(checkB) fontColor = "red";

              return (
                <ListItem key={idx} role={undefined} dense button>
                  <ListItemText primary={"제목 : "+title+ ", 내용 : "+content} 
                    style={{color:fontColor}}
                    secondary={moment(startDate).format('YYYY/MM/DD')+', '+startTime.format('HH:mm')+' ~ '+ moment(endDate).format('YYYY/MM/DD')+', '+endTime.format('HH:mm')} 
                  />
                </ListItem>
              )
            })}


          </List>

        </div>
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
