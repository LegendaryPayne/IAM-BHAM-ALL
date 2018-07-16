import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import CreateCards from './cards';

class AlltheChirps extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            chirps: [['nextid','b','c']]
        };
    }
    render() {
        
        return (
         <React.Fragment>
        <h1>You Made it</h1>
        </React.Fragment>   
        )
    }
}

export default AlltheChirps;