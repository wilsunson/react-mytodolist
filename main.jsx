import React from 'react'
import ReactDOM from 'react-dom'
import TODOLIST from './containers/TODOLIST/index.jsx'
import "antd/dist/antd.css";

class App extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  render() {
    return (
      <div className="app-container">
        <h1>MY TODOLIST</h1>
        <TODOLIST/>
        {this.state.now}
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
