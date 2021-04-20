import React, { useContext } from 'react';
import Todocontext from '../context/Todocontext';
import Todoitem from './Todoitem';
const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useContext(Todocontext);
  return (
    <>
      <div>
        <h3>TO-DOS</h3>
        <div>
          {todos.map((todo) => (
            <Todoitem
              key={todo.id}
              text={todo.text}
              complete={todo.complete}
              clicktotoggle={() => toggleTodo(todo.id)}
              clicktodelete={() => deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
