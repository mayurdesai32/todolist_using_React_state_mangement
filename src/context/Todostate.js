import React, { useReducer, useEffect } from 'react';
import Todocontext from './Todocontext';
import Todoreducer from './Todoreducer';
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './Todoaction';
const Todostate = (props) => {
  const initialstate = {
    todos: [],
  };
  const [state, dispatch] = useReducer(Todoreducer, initialstate, () => {
    const local = localStorage.getItem('list');
    return local ? JSON.parse(local) : [];
  });
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state));
    //es
  });

  //for addtodo
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };
  //for toggle
  const toggleTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };
  // for deleteTodo
  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };
  return (
    <Todocontext.Provider
      value={{ todos: state.todos, addTodo, toggleTodo, deleteTodo }}
    >
      {props.children}
    </Todocontext.Provider>
  );
};

export default Todostate;
