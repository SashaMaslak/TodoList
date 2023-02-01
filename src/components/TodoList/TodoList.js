import React from 'react';
import classNames from 'classnames';
import './TodoList.css';

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
  countTotal,
  countDone,
}) => (
  <>
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <input
            type="checkbox"
            className="TodoList__checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
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
