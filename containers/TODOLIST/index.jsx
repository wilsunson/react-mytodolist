import React from 'react';
import AppInput from './components/AppInput.jsx';
import AppList from './components/AppList.jsx';


class TODOLIST extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
            data:[{id:1,text:'todolist1',competed:false},{id:2,text:'todolist2',competed:true}]
        }
    }
    addtodo(id,text,competed){
        this.state.data.push({id:1,text:'todolist3',competed:false});
        console.log('index的',id,text,competed);
    }
    render(){
        return(
            <div>
                <p>aaaa</p>
              <AppInput addtodo={this.addtodo.bind(this)}/>
              <AppList data={this.state.data}/>
            </div>
        )
    }
}

export default TODOLIST;