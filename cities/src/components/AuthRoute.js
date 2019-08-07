import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const createAuthRoute = (checkUser, checkToken) => ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      checkUser() ? (
          <Component {...props} />
        ) : (
          checkToken() ? 
          <div>Loading plz wait por favor</div>
          :
          <Redirect to={{ pathname: "/login"}} />
        ))
      }
    />
  );

  export default createAuthRoute