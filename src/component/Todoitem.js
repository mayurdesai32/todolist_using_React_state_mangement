import React from 'react';

const Todoitem = ({ text, clicktotoggle, clicktodelete, complete }) => {
  return (
    <>
      <div>
        <span style={{ color: complete ? 'green' : 'red' }}>{text}</span>
        <div>
          <button onClick={clicktotoggle}>TOGGLE</button>
          <button onClick={clicktodelete}>DELETE</button>
        </div>
      </div>
    </>
  );
};

export default Todoitem;
