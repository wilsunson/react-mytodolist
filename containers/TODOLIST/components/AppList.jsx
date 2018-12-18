import React from 'react';


class AppList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
            data:this.props.data,
        }
    }
    render(){
        return(
            <div>
            ul
            </div>
        )
    }
}

export default AppList;