import React from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'Complete React App'},
        {id: 3, content: 'Coding'}
      ]
    }
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState ({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1
    console.log(todo.id)
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render () {
  return (
    <div className="todo-app container">
        <h1 className="center blue-text"><b>Todo's</b></h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <br/>
        <AddTodo addTodo={this.addTodo} />
      </div>
  )
  }
}

export default App;
