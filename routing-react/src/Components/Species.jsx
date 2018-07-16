import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from 'react-router-dom';

class Species extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/species")
      .then(results => results.json())
      .then(results => {
        console.log(results)
        this.setState({
          animal: results
        });
      });
    }

  render() {
    console.log(this.state.animal)
    return (
      <React.Fragment>
      <h1 className= 'text-center'>Species</h1>
      <div className='row'>
      {this.state.animal.map(props => {
        console.log(props);
        return (
          <div className="col d-flex justify-content-center my-2" key={'species-'+props.id}>
            <div className="card text-center" style={{width: '18em'}}>
              <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: {props.classification}</h6>
                <p className="card-text" style={{height: '50px'}}>Eye Colors: {props.eye_colors}</p>
                <Link className="btn btn-primary" to={'/Species/'+props.id}>Click Here For More</Link>
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

export default Species;