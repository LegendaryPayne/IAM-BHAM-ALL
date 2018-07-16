import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from 'react-router-dom';

class FilmId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.url.slice(7),
      thefilm: []
    }
  }

  componentDidMount() {
    console.log(this.state)
    fetch("https://ghibliapi.herokuapp.com/films/"+this.state.id)
      .then(results => results.json())
      .then(results => {
        console.log(results)
        this.setState({
          thefilm: results
        })
      })
    }

  render() {
    return (

      <React.Fragment>
      <div className="card text-center">
      <div className="card-header">
      {this.state.thefilm.title}
      </div>
      <div className="card-body">
        <h5 className="card-title">by {this.state.thefilm.director}, and {this.state.thefilm.producer}</h5>
        <p className="card-text">{this.state.thefilm.description}</p>
        <Link to="/Films" className="btn btn-primary">Return to all Films</Link>
      </div>
      <div className="card-footer text-muted">
        Released: {this.state.thefilm.release_date}
      </div>
    </div>
      </React.Fragment>
    );
  }
}

export default FilmId;