import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'

let handleClick2 = (event) => {
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
      <div className="col my-1 text-center mx-auto d-flex justify-content-center" id={`chirpNum${id}`} key={`${id}`}>
    <div className="card text-center" style={{width: "300px"}}>
        <div className="card-body p-1">
        <button type="button" className="close" onClick={ (event) => {
            handleClick2(event)
        }}>
            <span aria-hidden="true" id={`delete_${id}`}>&times;</span>
        </button>
        <p className="card-text" id={`chirptext${id}`}>{message}</p>
        <p className="card-text mb-2 text-muted" id={`chirptime${id}`}><small>At: {date}</small></p>
        <div className="d-flex justify-content-center">
        <NavLink className="btn btn-primary mx-auto" to={`/chirps/${id}`}>Click for More</NavLink>
        <button type="button" className="btn btn-primary mx-auto" data-toggle="modal" data-target="#testModal" data-whatever={`${id}`}>Click to Update</button></div>
        </div>
    </div>
</div>
)      
  }
};
export default CreateCards;
