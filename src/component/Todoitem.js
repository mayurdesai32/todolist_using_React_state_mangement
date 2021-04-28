import React from 'react';

const Todoitem = ({ text, clicktotoggle, clicktodelete, complete }) => {
  return (
    <>
      <div>
        {complete ? (
          <del style={{ color: 'red' }}>{text}</del>
        ) : (
          <span style={{ color: 'green' }}>{text}</span>
        )}
        {/*   <span style={{ color: complete ? 'green' : 'red' }}>{text}</span> */}
        <div>
          <button onClick={clicktotoggle}>TOGGLE</button>
          <button onClick={clicktodelete}>DELETE</button>
        </div>
      </div>
    </>
  );
};

export default Todoitem;
