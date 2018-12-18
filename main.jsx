import React from 'react'
import ReactDOM from 'react-dom'
import { Date } from 'core-js'
import TODOLIST from './containers/TODOLIST/index.jsx'

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      now: Date.now(),
      data:[{id:1,text:'todolist1',competed:false},{id:2,text:'todolist2',competed:true}]
    }
  }
  render() {
    let arr = ['a', 'b', 'c']
    return (
      <div className="">
        <h1>MY TODOLIST</h1>
        {/**
         <ul style={{ listStyle: 'none' }}>
          <li onClick={this.handle1.bind(this)}>1</li>
          <li onClick={this.handle2}>1</li>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        */}
        <TODOLIST/>
      </div>
    )
  }
  componentDidMount() {
    console.log('done')
    //请求数据
    this.setState({
      now: Date.now()
    })
  }
  handle1() {
    console.log(this.handle1)
    alert(1)
  }
  handle2() {
    alert(2)
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
