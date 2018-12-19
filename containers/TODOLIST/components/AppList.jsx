import React from 'react'

class AppList extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: this.props.tododata
    }
  }
  handleClick(index) {
    console.log('key', index);
    // this.setState({
    //     data:this.state.data.map((e)=>{
    //         if(e.id===index){
    //             e.completed=!e.completed;
    //         }
    //         return e;
    //     })
    // })
    this.props.handleclick(index);
  }
  render() {
   
    return (
      <div>
        <ul style={{listStyle: 'none'}}>
          {this.state.data.map((item, index) => (
            <li key={index} onClick={this.handleClick.bind(this,index)} className={item.completed ? 'disClass' : ''}>
              {item.id}、{item.text}、
              {item.completed? '已完成' : '未完成'}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  //子组件接收父组件修改state 中的 data
 componentWillReceiveProps(nextProps){
    this.setState({
        data:nextProps.tododata
    })
 }
}

export default AppList
