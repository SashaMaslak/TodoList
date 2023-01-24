import React from 'react';
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo, countTotal, countDone }) => (
  <>
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button type="button" onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    <p>Total number of Todo: {countTotal} </p>
    <p> Number of completed Todo: {countDone} </p>
  </>
);

export default TodoList;
