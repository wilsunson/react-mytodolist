import React from 'react';


class AppList extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
            data:this.props.data,
            arr:[1,2,3]
        }
    }
    render(){
        return(
            <div>
                <ul>
            {this.state.arr.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
            <ul>
                {this.state.data.map(({i,text,completed},index)=><li key={index}>
                {i+1}{text}{completed ? "yes" :"no"}
                </li>)}
            </ul>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.state.data)
    }
}

export default AppList;