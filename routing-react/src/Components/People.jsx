import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from 'react-router-dom';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(results => results.json())
      .then(results => {
        console.log(results)
        this.setState({
          person: results
        });
      });
    }

  render() {
    console.log(this.state.person)
    return (
      <React.Fragment>
      <h1 className= 'text-center'>People</h1>
      <div className='row'>
      {this.state.person.map(props => {
        console.log(props);
        return (
          <div className="col d-flex justify-content-center my-2" key={'people-'+props.id}>
            <div className="card" style={{width: '18em'}}>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Sex: {props.gender}</h6>
                <p className="card-text">Eye Color: {props.eye_color}</p>
                <Link className="btn btn-primary" to={'/People/'+props.id}>Click Here For More</Link>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      
      </React.Fragment>
    );
  }
}

export default People;