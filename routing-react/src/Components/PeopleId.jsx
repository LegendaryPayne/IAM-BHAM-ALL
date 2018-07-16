import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from 'react-router-dom';

class PeopleId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.url.slice(7),
      thepeople: []
    }
  }

  componentDidMount() {
    console.log(this.state)
    fetch("https://ghibliapi.herokuapp.com/People/"+this.state.id)
      .then(results => results.json())
      .then(results => {
        console.log(results)
        this.setState({
          thepeople: results
        })
      })
    }

  render() {
    return (

      <React.Fragment>
      <div className="card text-center">
      <div className="card-header">
      {this.state.thepeople.name}
      </div>
      <div className="card-body">
        <h5 className="card-title">Sex: {this.state.thepeople.gender}, Age: {this.state.thepeople.age}</h5>
        <p className="card-text">Eye Color:{this.state.thepeople.eye_color}</p>
        <Link to="/People" className="btn btn-primary">Return to People</Link>
      </div>
    </div>
      
      </React.Fragment>
    );
  }
}

export default PeopleId;