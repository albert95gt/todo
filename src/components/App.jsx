import { useState } from 'react';
import InputField from './InputField';
import TodoList from './TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

export const App = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <div>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
};
