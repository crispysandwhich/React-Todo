import React from 'react';
import './components/Todo.css'

import TodoList from './components/TodoList'
import TodoForm form './components/TodoForm'


const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      tasks: data,
      task: ''
    }
  }


  onChange = (e) => {
    const {name, value} = e.target
    this.setState({
      ...this.state,
      task: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log('😎')
    const newTodo = {
      task: this.state.task,
      id: new Date(),
      completed: false
    }

    console.log(newTodo)
  }



  render() {
    return (
      <div className="app">

        <div className="todoApp">
          <h2 className="todoApp_title">my Todos bro</h2>

          {/* Todo List */}
          <TodoList data={this.state.tasks}/>
          

          {/* TodoForm */}
          <TodoForm />
        </div>

      </div>
    );
  }
}

export default App;
