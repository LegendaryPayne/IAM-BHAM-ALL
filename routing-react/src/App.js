import React from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home'
import FilmId from './Components/FilmId';
import PeopleId from './Components/PeopleId';
import SpeciesId from './Components/SpeciesId';
import People from './Components/People';
import Films from './Components/Films';
import Species from './Components/Species';

class App extends React.Component {
  render() {
    return (
      <Router>
      <React.Fragment>
      <Pagination />
      <div>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/People" component={People} />
      <Route exact path="/Films" component={Films} />
      <Route exact path="/Species" component={Species} />
      <Route path='/Films/:id' component={FilmId}/>
      <Route path="/People/:id" component={PeopleId} />
      <Route path="/Species/:id" component={SpeciesId} />
      </Switch>
      </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
