import React from "react";
import { Route } from "react-router-dom";

function Welcome(props) {
  return (
    <React.Fragment>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, New user </p>
      </Route>
    </React.Fragment>
  );
}

export default Welcome;
