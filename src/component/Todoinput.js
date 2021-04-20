import React, { useState, useContext } from 'react';
import Todocontext from '../context/Todocontext';
const Todoinput = () => {
  const [todo, setTodo] = useState('');
  const { addTodo } = useContext(Todocontext);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: todo,
      complete: false,
    };

    addTodo(newTodo);

    setTodo('');
  };
  return (
    <div>
      <h3>useCONTEXT + useREDUCER TO-DO LIST</h3>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          value={todo}
          placeholder='Enter a Todo...'
          onChange={onChangeHandler}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default Todoinput;
