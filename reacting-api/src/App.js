import React from "react";
import "isomorphic-fetch";
import "es6-promise";
let cardArray= []
function randomval(max) {
  return Math.floor(Math.random() * max);
}

class Apps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: [],
      people: [],
      thecards: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(results => results.json())
      .then(results => {
        this.setState({
          film: results
        });
      });

    fetch("https://ghibliapi.herokuapp.com/people")
      .then(results => results.json())
      .then(results => {
        this.setState({
          people: results
        });
      });
  }


  handleClick = props => {
    let rand = randomval(props.length);
    let singleCard = props[rand];
    let card; 
    console.log(this.state.film.length)   
    if(Object.values(singleCard).length >9) {
      card = (
        <div className="col my-2 mx-0 text-center" key={'films-'+singleCard.id}>
          <div className="card" style={{ width: "18em" }}>
            <div className="card-header">{singleCard.title}</div>
            <div className="card-body">
              <h5 className="card-title">Producer: {singleCard.producer}</h5>
              <p className="card-text">
                {singleCard.description}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      card = (
        <div className="col my-2 mx-0 text-center" key={'person-'+singleCard.id}>
          <div className="card" style={{ width: "18em" }}>
            <div className="card-header">{singleCard.name}</div>
            <div className="card-body">
              <h5 className="card-title">Gender: {singleCard.gender}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Age: {singleCard.age}</h6>
              <p className="card-text">
                 Eye Color: {singleCard.eye_color}
              </p>
              <p className="card-text">
              Hair Color: {singleCard.hair_color}
            </p>
            <a href={singleCard.films[0]} className="btn btn-primary">List of Films</a>
            </div>
          </div>
        </div>
      );
    }
  cardArray.push(card)
    this.setState({
      thecards: cardArray
    })   
    console.log(this.state.thecards) 
  };

placeCards() {
  return this.state.thecards.map(test => {
    return (test);
  })
}
  render() {
    return (
      <React.Fragment>
        <button
          onClick={event => {
            this.handleClick(this.state.film);
          }}
        >
          Click to add a Film
        </button>
        <button
          onClick={event => {
            this.handleClick(this.state.people);
          }}
        >
          Click to add a Person
        </button>
        <div className="container-fliud">
          <div className="row d-flex flex-row flex-wrap">
          {this.placeCards()
          }
        </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Apps;
