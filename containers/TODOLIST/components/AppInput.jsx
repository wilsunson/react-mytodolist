import React from 'react';


class AppInput extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
            data:this.props.data,
        }
    }
    render(){
        return(
            <div>
             <input type="text" name="" id=""/>
            </div>
        )
    }
}

export default AppInput;