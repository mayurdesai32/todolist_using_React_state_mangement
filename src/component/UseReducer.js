import React, { useReducer, useState } from 'react';
const reducerfunction = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'initalstate':
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

const initialstate = {
  count: 0,
};

const UseReducer = () => {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerfunction, initialstate);
  return (
    <div>
      <h1>Reducer Example</h1>
      <div>
        <label htmlFor='#number'>start the count</label>
        <input
          type='number'
          name=''
          id='number'
          value={input}
          onChange={(e) => {
            setInput(parseInt(e.target.value));
          }}
        />
        <button
          onClick={(e) => {
            dispatch({ type: 'initalstate', payload: input });
          }}
        >
          inital count
        </button>
        <p>{state.count}</p>
        <button
          onClick={(e) => {
            dispatch({ type: 'increment' });
          }}
        >
          increment
        </button>
        <button
          onClick={(e) => {
            dispatch({ type: 'decrement' });
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
