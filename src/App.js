import React, { Component } from 'react';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import initialTodos from './todos.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
    return (
      <>
        <h1>Стан компонента1</h1>
        <Counter initialValue={10} />
        <h1>Стан компонента2</h1>
        <Dropdown />
        <h1>Стан компонента3</h1>
        <ColorPicker options={colorPickerOptions} />
        <h1>Стан компонента4</h1>
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          countTotal={todos.length}
          countDone={completedTodosCount}
        />
      </>
    );
  }
}

export default App;