import React from 'react';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={onToggleCompleted}
      />
      <p className="TodoList__text">{text}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
