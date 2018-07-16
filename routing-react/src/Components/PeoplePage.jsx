import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import People from "./People";

class PeoplePage extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Switch>
            <Route exact path="/People" component={People} />
          </Switch>
        </React.Fragment>
    );
  }
}

export default PeoplePage;
