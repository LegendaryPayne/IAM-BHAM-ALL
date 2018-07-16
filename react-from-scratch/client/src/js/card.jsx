import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'

let handleClick3 = (event) => {
  let tagName = event.target.id
  let tagID = tagName.split("_").pop()
  console.log(tagID)
  $(`#chirpNum${tagID}`).remove();
  fetch(`/api/chirps/${tagID}`, {
      method: 'DELETE',
     })
}

let CreateCards = (id, message, date) => {
  console.log(id, message, date)
  if (!isNaN(+id)) {
      return (
    <div className="card text-center text-white bg-dark mb-3 container" key={`${id}`}>
          <div className="card-header">        <button type="button" className="close" id={`DeleteChirp${id}`} onClick={ (event) => {
            handleClick3(event)
        }}>
            <span aria-hidden="true" id={`delete_${id}`}>&times;</span>
        </button>
    Chirp #{id}
  </div>
        <div className="card-body p-1">
        <p className="card-text" id={`chirptext${id}`}>{message}</p>

        <button type="button" className="btn btn-danger mr-auto">Click to Update</button>
        </div>
        <div className="card-footer text-white" id={`chirptime${id}`}>
        At: {date}
  </div>
    </div>
)      
  }
};
export default CreateCards;
