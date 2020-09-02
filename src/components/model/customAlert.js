import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

class CustomAlert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false
        }

    }

    visibleAlert(){

    }


    render(){
        const {modalOpen, modalClose, message} = this.props;
       // const text = "Validation Check Error 발생!";
        
        return(
            <Snackbar
                anchorOrigin={{ vertical:"top", horizontal:"center" }}
                open={modalOpen}
                autoHideDuration={2000}
                onClose={()=> modalClose()}
                >
                <Alert onClose={()=> modalClose()} variant="outlined" severity="warning">
                    {message}
                </Alert>
            </Snackbar>
        )

    }
}

export default CustomAlert;