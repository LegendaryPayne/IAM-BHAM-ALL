import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";

function postedSince(date) {
let createdTime = Date.parse(date);
var nowTime = Date.parse(new Date);
let howLong = moment.duration((nowTime - createdTime), "milliseconds").format("y [years], M [Months], w [weeks], d [days], h [hours], m [minutes], s [seconds]");
return (howLong.split(','))
}

function noMorethanStated(text, num) {
    if (text.length > num) {
        let newtext = text.slice(0,num)
        return (newtext+'...')
    } else {
        return text
    }
}

let CreateLinks = (data) => {
let {id, title, content, _created: date} = data
let whenPosted = postedSince(date)

  if (!isNaN(+id)) {
      return (
        <NavLink to={`/blogs/${id}`} className="list-group-item list-group-item-action flex-column align-items-start" key={`links${id}`} id={`blog${id}`}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{noMorethanStated(title, 15)}</h5>
          <small>{whenPosted[0]} ago</small>
        </div>
        <p className="mb-1">{noMorethanStated(content, 100)}</p>
      </NavLink>
)      
  }
};
export default CreateLinks;
