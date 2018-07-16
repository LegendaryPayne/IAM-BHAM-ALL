import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import Navigation from './Navigation'
import SideNavigation from './sidenavigation';
import Content from './Content';
import Home from './Home';


class App extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                <Navigation />
                <div className="container-fuild">
                <div className="row">
                    <SideNavigation />
                <Switch>
                <Route path="/blogs/:id" component={Content}/>
                <Route exact path="/" component={Home}/> 
                </Switch>
                    </div>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default App;