import React from 'react'
import { Input } from 'antd'

const Search = Input.Search

class AppInput extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: ''
    }
  }
  change(event) {
    // console.log(event.target.value);
    this.setState({
      value: event.target.value
    })
  }

  btnAdd(val){
   this.props.addtodo(val,false);
   this.setState({
    value: ''
  })
  }
  render() {
    return (
      <div>
        <Search 
         placeholder="TODOLIST"
         enterButton="添加"
         size="large"
         style={{ width:300 }}
         value={this.state.value}
         onChange={this.change.bind(this)}
         onSearch={value=>this.btnAdd(value,this)}></Search>
      </div>
    )
  }
}

export default AppInput
