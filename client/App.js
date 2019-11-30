import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";

import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

class App extends Component {
  render() {
    console.log(this.props, "in app.js");
    return (
      <Fragment>
        <Route exact path="/" component={AllUsers} />
        <Route exact path="/edit/:id" component={UpdateUser} />
        <Route exact path="/add" component={AddUser} />
      </Fragment>
    );
  }
}

export default App;
