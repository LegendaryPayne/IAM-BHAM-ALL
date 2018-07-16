import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Species from "./Species";
import SpeciesId from "./SpeciesId";

class SpeciesPage extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Switch>
            <Route exact path="/Species" component={Species} />
          </Switch>
        </React.Fragment>
    );
  }
}

export default SpeciesPage;
