import React from 'react';
import classNames from 'classnames';
import './TodoList.css';
import Todo from 'components/Todo/Todo';

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
  countTotal,
  countDone,
}) => (
  <>
    <p>Total number of Todo: {countTotal} </p>
    <p> Number of completed Todo: {countDone} </p>
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() => onToggleCompleted(id)}
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  </>
);

export default TodoList;
