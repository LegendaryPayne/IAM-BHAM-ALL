import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home"
import ChirpPage from "./ChirpPage"
import AlltheChirps from "./AlltheChirps"



class App extends React.Component {

  render() {
    return (
      <Router>
        <React.Fragment>
        <Navigation />
          <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/users/:id" component={AlltheChirps}/>
         <Route path="/chirps/:id" component={ChirpPage}/> 
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
