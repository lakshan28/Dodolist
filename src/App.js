import React, { Component } from 'react';
import Todos from './componets/Todos';
import Header from './componets/layout/Header';
import AddTodo from './componets/AddTodo';


//import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Namo Buddaya!',
        completed: true
      },
      {
        id: 2,
        title: 'Namo Buddaya!',
        completed: true
      },
      {
        id: 3,
        title: 'Namo Buddaya!',
        completed: false
      },
    ]
  }

  //Toggle Comlete 

  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if(todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
//Delete Dodo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

//Add Todo

addTodo = (title) => {
  const newTodo = {
    id: 4,
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos] });
}

  render() {
   
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} 
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
