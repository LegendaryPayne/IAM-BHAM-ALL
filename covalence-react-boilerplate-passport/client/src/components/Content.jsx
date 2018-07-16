import React, { Component } from "react";
import { render } from "react-dom";
import styles from "../css/styles.css";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Pagination from './Pagination'
class Content extends Component {
  constructor(props) {
      console.log('content constructor');
    super(props);
    this.state = {
      blog: {},
      pageid: 0
    };
  }
setdata() {
    let blog = this.props.location.pathname.match(/\/blogs\/([\d]+)/gm)
    let theid = blog[0].slice(7)
    if(theid !== this.state.pageid) {
    console.log(theid)
    this.gogetdata(theid)           
    } 
}

  gogetdata(id) {
    fetch(`/api/blogs/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          blog: data,
          pageid: id
        });
      })
      .catch(err => {
        console.log(`Doesn't Not Exist`);
      });
  }
  postedSince(date) {
    let createdTime = Date.parse(date);
    var nowTime = Date.parse(new Date());
    let howLong = moment
      .duration(nowTime - createdTime, "milliseconds")
      .format(
        "y [years], M [Months], w [weeks], d [days], h [hours], m [minutes], s [seconds]"
      );
    let timeofpost = howLong.split(",");
    return timeofpost[0];
  }

  createcard(data) {
    if (data.id) {
      return (
        <React.Fragment>
          <div className="card">
            <div className="card-header">
              {this.state.blog.title}{" "}
              <button type="button" className="close" data-toggle="modal" data-target="#exampleModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{this.state.blog.content}</p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between align-items-center">
              {this.postedSince(this.state.blog._created)} ago{" "}
              <button type="button" className="btn btn-primary">
                Click to Update
              </button>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <h1 className="text-center d-block" key={this.props.match.params.id}>
          This Page Doesn't Exist
        </h1>
      );
    }
    <div className="card">
      <div className="card-header">
        {this.state.blog.title}{" "}
        <button type="button" className="close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{this.state.blog.content}</p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
      <div className="card-footer text-muted d-flex justify-content-between align-items-center">
        {this.postedSince(this.state.blog._created)} ago
        <button type="button" className="btn btn-primary">
          Click to Update
        </button>
      </div>
    </div>
    
  }

  render() {
    console.log('this.state.blog', this.state.blog);
    this.setdata()
    return (
      <React.Fragment>
        <div
          className="col mt-5 position-relative"
          style={{
            backgroundImage:
              "url('https://i0.wp.com/thelittleblushbook.com/wp-content/uploads/2017/12/283037-download-free-marble-background-2048x1347-xiaomi.jpg')"
          }}
        >
          <div
            className="position-absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            {this.createcard(this.state.blog)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
