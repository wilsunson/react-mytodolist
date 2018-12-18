import React from 'react';


class AppInput extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state={
           value:''
        }
    }
    change(event){
       // console.log(event.target.value);
       this.setState({
           value:event.target.value
       });
      this.state.value=event.target.value;
      console.log(this.state.value);
    }
    addto(e){
      if(e.which==13){
          console.log('enter');
          this.props.addtodo(1,this.state.value,false);
           this.setState({
            value:''
        })
      } 
    }
    render(){
        return(
            <div>
             <input type="text" ref="todoitem" value={this.state.value} placeholder="TODOLIST" onChange={this.change.bind(this)} onKeyPress={this.addto.bind(this)}/>
            </div>
        )
    }
}

export default AppInput;