import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'


class Navigation extends React.Component {
  render() {
    return (
<React.Fragment>
<nav className="d-flex justify-content-center navbar navbar-expand-md navbar-dark bg-dark mb-5 rounded-bottom"></nav>
<nav className="fixed-top d-flex justify-content-center navbar navbar-expand-md navbar-dark bg-dark mb-4 rounded-bottom">
      <NavLink className="navbar-brand text-center mx-auto" to={`/users/1`} data-toggle="tooltip" data-placement="bottom" title="Click to See Who Is Chirpping About You">Chirper</NavLink>
      <div className="dropdown d-flex justify-content-end float-right">
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Options
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Settings</a>
    <a className="dropdown-item" href="#">Log-out</a>
  </div>
</div>
    </nav>
</React.Fragment>

    )
  }
}

export default Navigation;