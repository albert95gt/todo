import React from 'react';
import TodoItems from './TodoItems';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map(({ id, text, completed }) => {
        return (
          <li key={id}>
            <TodoItems id={id} text={text} completed={completed} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
