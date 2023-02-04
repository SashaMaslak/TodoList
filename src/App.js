import React, { Component } from 'react';
import shortid from 'shortid';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import ColorPicker from './components/ColorPicker';
import TodoList from './components/TodoList';
import TodoEditor from 'components/TodoEditor/TodoEditor';
import TodoFilter from 'components/TodoFilter/TodoFilter';
import Form from 'components/Form/Form';
import Modal from 'components/Modal';
import Clock from 'components/Clock';
import Tabs from 'components/Tabs';
import tabs from './tabs.json';
import IconButton from 'components/IconButton';
import { ReactComponent as AddIcon } from './icons/add.svg';
// import initialTodos from './todos.json';

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
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(_, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));

    // this.toggleModal();
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  getCompletedTodosCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const completedTodosCount = this.getCompletedTodosCount();
    const visibleTodos = this.getVisibleTodos();

    return (
      <>
        <Clock />
        <h1>TODOS</h1>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Add Todo</h1>
            <TodoEditor onSubmit={this.addTodo} />
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
        <IconButton onClick={this.toggleModal} aria-label="Add todo">
          <AddIcon width="40" height="40" fill="white" />
        </IconButton>
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          countTotal={todos.length}
          countDone={completedTodosCount}
          onToggleCompleted={this.toggleCompleted}
        />
        <h1>Стан компонента1</h1>
        <Tabs items={tabs} />
        <br />
        <h1>Стан компонента2</h1>
        <Counter initialValue={10} />
        <br />
        <h1>Стан компонента3</h1>
        <Dropdown />
        <br />
        <h1>Стан компонента4</h1>
        <ColorPicker options={colorPickerOptions} />
        <br />
        <h1>FORM</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <br />
        <br />
      </>
    );
  }
}

export default App;
