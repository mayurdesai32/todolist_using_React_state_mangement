import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
// import UseReducer from './component/UseReducer';
import Feedpage from './component/Feedpage';
import Homepage from './component/Homepage';
// import appContext from './Context/app-Context';
import Appstate from './Context/Appstate';
const App = () => {
  return (
    <>
      {/* <UseReducer /> */}
      <div>
        <h1>context example</h1>

        <nav>
          <ul>
            <li>
              <Link to='/home'>home</Link>
            </li>
            <li>
              <Link to='/feed'>feed</Link>
            </li>
          </ul>
        </nav>
        <Appstate>
          <Switch>
            <Route exact path='/home' component={Homepage} />
            <Route exact path='/feed' component={Feedpage} />
          </Switch>
        </Appstate>
      </div>
    </>
  );
};

export default App;
