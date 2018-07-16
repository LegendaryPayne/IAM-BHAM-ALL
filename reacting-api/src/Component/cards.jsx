import React from "react";

class Cards extends React.Component {
    constructor(props) {
      super(props);
      this.handleCards(props)
    }

    handleCards = (props) => {
        let thecards; 
        
        if(Object.values(props).length >9) {
          thecards = (
            <div className="col my-2 mx-0 text-center" key={'films-'+props.id}>
              <div className="card" style={{ width: "18em" }}>
                <div className="card-header">{props.title}</div>
                <div className="card-body">
                  <h5 className="card-title">Producer: {props.producer}</h5>
                  <p className="card-text">
                    {props.description}
                  </p>
                </div>
              </div>
            </div>
          );
        } else {
          thecards = (
            <div className="col my-2 mx-0 text-center" key={'person-'+props.id}>
              <div className="card" style={{ width: "18em" }}>
                <div className="card-header">{props.name}</div>
                <div className="card-body">
                  <h5 className="card-title">Gender: {props.gender}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Age: {props.age}</h6>
                  <p className="card-text">
                     Eye Color: {props.eye_color}
                  </p>
                  <p className="card-text">
                  Hair Color: {props.hair_color}
                </p>
                <a href={props.films[0]} className="btn btn-primary">List of Films</a>
                </div>
              </div>
            </div>
          );
        }

        return thecards
        }
    }
export default Cards