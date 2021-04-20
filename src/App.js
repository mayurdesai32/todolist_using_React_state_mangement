import React from 'react';
import Todoinput from './component/Todoinput';
import TodoList from './component/TodoList';
import Todostate from './context/Todostate';
const App = () => {
  return (
    <>
      <Todostate>
        <Todoinput />
        <TodoList />
      </Todostate>
    </>
  );
};

export default App;
