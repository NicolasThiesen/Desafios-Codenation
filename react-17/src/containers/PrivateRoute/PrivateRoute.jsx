import React from 'react';

import {
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const isLogged = useSelector(state => state.auth.isLogged);
  return (
    <div>
      {isLogged ===true 
        ? <Route {...rest}  render={props =><Component {...props} />} /> 
        : <Redirect to="/" />}
    </div>
  );
}

export default PrivateRoute;

