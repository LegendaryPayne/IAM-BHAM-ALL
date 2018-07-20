import React, { Component } from 'react';
import { render } from 'react-dom';
import SideNavigation from './sidenavigation';
import { isLoggedIn } from '../../services/user';

class HelloWorld extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <React.Fragment>
        <SideNavigation/>
        </React.Fragment>
        );
    }
}

export default HelloWorld;