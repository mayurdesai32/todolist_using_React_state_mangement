import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

const Homepage = () => {
  let { message, isAuth, setIsAuth } = useContext(AppContext);

  return (
    <>
      <h2 style={{ background: isAuth ? 'blue' : 'red' }}>this is Homepage</h2>
      <p> {message}</p>
      {isAuth ? (
        <button
          onClick={() => {
            setIsAuth(false);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsAuth(true);
          }}
        >
          login
        </button>
      )}
    </>
  );
};

export default Homepage;
