import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">
      Filter by name{' '}
      <input
        className="TodoFilter__input"
        type="text"
        value={value}
        onChange={onChange}
      />
    </p>
  </div>
);
export default TodoFilter;
