import React from 'react'
import AppInput from './components/AppInput.jsx'
import AppList from './components/AppList.jsx'

class TODOLIST extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      todos: [
        { id: 0, text: 'todolist1', completed: false },
        { id: 1, text: 'todolist2', completed: true }
      ]
    }
  }
  addtodo(text, completed) {
    let todoId = this.state.todos.length
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: todoId,
          text: text,
          completed: completed
        }
      ]
    })
  }

  handleclick(index) {
    this.setState({
      todos: this.state.todos.map(e => {
        if (e.id === index) {
          e.completed = !e.completed
        }
        return e
      })
    })
  }
  Delete(val){
    this.setState({
        todos:this.state.todos.filter((e)=>{
          return e.id!=val;
        })
    })
  }

  render() {
    return (
      <div>
        <p>write down your plan</p>
        <AppInput addtodo={this.addtodo.bind(this)} />
        <AppList
          tododata={this.state.todos}
          handleclick={this.handleclick.bind(this)}
          onDelete={this.Delete.bind(this)}
        />
      </div>
    )
  }
}

export default TODOLIST
