import React, { useEffect, useState } from 'react';
// import useLocalStore from './useLocalStore';

const Form = () => {
  const [state, setstate] = useState('');
  useEffect(() => {
    document.title = { state };
  }, []);
  return (
    <>
      <input
        type='text'
        value={state}
        onChange={(e) => {
          setstate(e.target.value);
        }}
      />
    </>
  );
};
export default Form;
