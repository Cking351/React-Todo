import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const things = [
  {
    name: "Learn React",
    id: 123,
    complete: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      things: things
    }
  }

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: new Date(),
      complete: false
    }
    this.setState({
      things: [...this.state.things, newItem]
    })
  }

  toggleItem = itemId => {
    this.setState({
      things: this.state.things.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            complete: !item.complete
          }
        }else {
          return item
        }
      })
    })
  }




  render() {

    return (
      <div>
        <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        </div>
        <TodoList toggleItem={this.toggleItem} things={this.state.things} />
      </div>
    );
  }
}

export default App;
