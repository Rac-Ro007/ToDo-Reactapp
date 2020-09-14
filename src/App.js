import React from 'react';

import Todos from './Todos'

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

  deleteTodo(id) {
    console.log(id)
  }

  render () {
  return (
    <div className="todo-app container">
        <h1 className="center blue-text"><b>Todo's</b></h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
  )
  }
}

export default App;
