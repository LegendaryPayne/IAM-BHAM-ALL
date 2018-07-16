import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import AuthButton from './auth/authButton';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <React.Fragment>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark border-bottom border-white">
      <NavLink className="navbar-brand" to="/">Home</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <AuthButton />
      </li>
    </ul>
  </div>
    </nav>
            </React.Fragment>
        )
    }
}

export default Navigation;