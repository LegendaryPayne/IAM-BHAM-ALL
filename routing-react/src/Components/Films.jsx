import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import { Link } from 'react-router-dom';


class Films extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(results => results.json())
      .then(results => {
        console.log(results)
        this.setState({
          film: results
        });
      });
    }

  render() {
    console.log(this.state.film)
    return (

      <React.Fragment>
      <h1 className= 'text-center'>Films</h1>
      <div className='row mb-2'>
      {this.state.film.map(props => {
        console.log(props);
        return (
          <div className="col d-flex justify-content-center my-2" key={'films-'+props.id}>
            <div className="card" style={{width: '18em'}}>
              <div className="card-body text-center" style={{height: "200px", overflowY: 'scroll', position: 'relative'}}>
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">By {props.director}</h6>
                <p className="card-text">{props.description}</p>
                <Link className="btn btn-primary" to={'/Films/'+props.id}>Click Here For More</Link>
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

export default Films;