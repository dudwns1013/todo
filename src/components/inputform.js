import React from 'react';
import { Paper, TextField,Button, /*Dialog*/ } from '@material-ui/core';
import {KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import CAlert from './model/customAlert';


class InputForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            title: "",
            content: "",
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null,
            message: null,
            modalOpen: false
        }
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
    
      stdateChange = (value) => {
        const stdate = value.format('YYYY-MM-DD');
        this.setState({
            startDate:stdate
        }); 
      }

      endateChange = (value) => {
        const eddate = value.format('YYYY-MM-DD');
        this.setState({
            endDate:eddate
        }); 
      }
     
    
      sttimeChange = (value) => {
        const stnowtime = value
        this.setState({
            startTime: stnowtime
        });
        
      }

      entimeChange = (value) => {
        const ennowtime = value
        this.setState({
            endTime: ennowtime
        });
        
      }

      checkValidate(){
        const{
          title, content, startDate, startTime, endDate, endTime
        }= this.state;

        const data = {
          제목: title, 내용: content, 시작일: startDate, 시작시간: startTime, 종료일: endDate, 종료시간: endTime
        }

        for(const [key, value] of Object.entries(data)){
          //console.log(key, value)
          if(!value) return {check: false, target:key}
        }
        return {check : true}


        // if(!title || !content || !startDate || !endDate || !startTime || !endTime){
        //   if(!title){
        //     this.setState({
        //       message : "제목을 확인해주세요!"
        //     });
        //   }else if(!content){
        //     this.setState({
        //       message : "내용을 확인해주세요!"
        //     });
        //   }else if(!startDate){
        //     this.setState({
        //       message : "시작날짜을 확인해주세요!"
        //     });
        //   }else if(!endDate){
        //     this.setState({
        //       message : "종료날짜을 확인해주세요!"
        //     });
        //   }else if(!startTime){
        //     this.setState({
        //       message : "시작시간을 확인해주세요!"
        //     });
        //   }else if(!endTime){
        //     this.setState({
        //       message : "종료시간을 확인해주세요!"
        //     });
        //   }
        //   return false;
        // }else
        //   return true;
      }

      addInputData(){
        //console.log(this);
        const data = this.state;
        const result = this.checkValidate();
        if(result.check){
          this.props.addTodoList(data);
          this.setState({
            title: "",
            content: "",
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null
          });
        }else{
          this.setState({
            modalOpen: true,
            message: result.target
          });
        }

      }

      modalClose(){
        this.setState({
          modalOpen: false
        });
      }

    render(){
      
        return (
            <Paper className="input_area" variant="outlined" style={{padding: '10px'}}>
          <TextField 
            label="제목" 
            placeholder="제목을 입력해 주세요." 
            name="title"
            value={this.state.title}
            onChange={this.titleChange}
            size="small" 
            margin="normal" 
            fullWidth required />

          <TextField 
            label="상세내용"
            name="content"
            value={this.state.content}
            onChange={this.contentChange} 
            size="small" 
            margin="normal" 
            fullWidth multiline />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={this.stdateChange}
            value={this.state.startDate}
            style={{width:'50%'}}
            KeyboardButtonProps={{
              'aria-label':'change date',
            }}
          />

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="종료 예정일"
            onChange={this.endateChange}
            value={this.state.endDate}
            style={{width:'50%'}}
            KeyboardButtonProps={{
              'aria-label':'change date',
            }}
          />

          <KeyboardTimePicker
          margin="normal"
          label="시작시간"
          variant="inline"
          format="HH:mm"
          onChange={this.sttimeChange}
          value={this.state.startTime}
          style={{width:'50%'}}
          KeyboardButtonProps={{
            'aria-label':'change time',
          }}
          />

          <KeyboardTimePicker
          margin="normal"
          label="종료시간"
          variant="inline"
          format="HH:mm"
          onChange={this.entimeChange}
          value={this.state.endTime}
          style={{width:'50%'}}
          KeyboardButtonProps={{
            'aria-label':'change time',
          }}
          />

          <Button
            variant="contained"
            color="secondary"
            onClick={this.addInputData.bind(this)}
            startIcon={<ThreeDRotationIcon />}
            >
            insert
          </Button>
          <CAlert modalClose={this.modalClose.bind(this)} modalOpen={this.state.modalOpen} message={this.state.message+"을 확인하세요."} />

        </Paper>
        )
    }

}

export default InputForm;