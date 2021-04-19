import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

const Feedpage = () => {
  const { message } = useContext(AppContext);
  console.log(message);
  return (
    <>
      <h1>hello</h1>
      <h2 style={{ background: 'blue' }}> this is Feedpage</h2>
      <p> {message}</p>
    </>
  );
};

export default Feedpage;
