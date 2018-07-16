import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from 'react-router-dom';

class SpeciesId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.url.slice(8),
      thespecies: []
    }
  }

  componentDidMount() {
    console.log(this.state)
    fetch("https://ghibliapi.herokuapp.com/Species/"+this.state.id)
      .then(results => results.json())
      .then(results => {
        console.log(results)
        this.setState({
          thespecies: results
        })
      }).catch(err => {
        console.log('something went wrong')
      })
    }

  render() {
    if(this.state.thespecies === {}){
            return (
        <React.Fragment>
          <h1 className="text-center"> Sorry There is Nothing Here</h1>
        </React.Fragment>
      )
    } else {
      return (

        <React.Fragment>
        <div className="card text-center">
        <div className="card-header">
        {this.state.thespecies.name}
        </div>
        <div className="card-body">
          <h5 className="card-title">Classification: {this.state.thespecies.classification}</h5>
          <p className="card-text">Eye Colors:{this.state.thespecies.eye_colors}</p>
          <p>Hair Colors: {this.state.thespecies.age}</p>
          <Link to="/Species" className="btn btn-primary">Return to Species</Link>
        </div>
      </div>
        
        </React.Fragment>
      );
    }

  }
}

export default SpeciesId;