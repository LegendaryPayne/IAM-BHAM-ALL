import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'

class ChirpPage extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            chirp: [['nextid','b','c']],
        };
    }
    
    componentDidMount(props) {
this.goGetCard()
    } 

    goGetCard() {  
    }

 render (props) {
     return(
        <React.Fragment>
        <div className="text-center">
        </div>        
        </React.Fragment>
     )
 }
}

export default ChirpPage;