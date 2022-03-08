import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleted } from './redux/todoSlice';

const TodoItems = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleCompleted({ id }))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </>
  );
};

export default TodoItems;
