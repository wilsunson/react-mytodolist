import React from 'react';
import AppInput from './components/AppInput.jsx';
import AppList from './components/AppList.jsx';


class TODOLIST extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
            data:this.props.data,
        }
    }
    render(){
        return(
            <div>
                <p>aaaa</p>
              <AppInput/>
              <AppList/>
            </div>
        )
    }
}

export default TODOLIST;