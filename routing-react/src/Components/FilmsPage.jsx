import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Films from "./Films";

class FilmPage extends React.Component {

  render() {
    return (

      <React.Fragment>
      <Switch>
      <Route exact path='/Films' component={Films}/>
    </Switch>
      </React.Fragment>
    );
  }
}

export default FilmPage;