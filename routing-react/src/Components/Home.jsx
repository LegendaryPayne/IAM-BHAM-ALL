import React from "react";
import "isomorphic-fetch";
import "es6-promise";
import image from '../assets/logo.png'

class Home extends React.Component {


  render() {
    return (
      <React.Fragment>
      <img className ='d-block mx-auto' src={image} />
      </React.Fragment>
    );
  }
}

export default Home;