import React from 'react';
import { render } from 'react-dom';
import theLinks from './CreateLinks'
import CreateLinks from './CreateLinks';

class SideNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          blogs: []
        }
    }

    componentDidMount() {
    this.gogetdata()
    }
    handleSubmitClick() {
    let theTitle = $("#theTitle").val()
    let theContent = $("#theContent").val()
    let sending = JSON.stringify({
      title: theTitle,
      content: theContent
    });
    fetch('/api/blogs', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: sending
     }).then
     (res => res.json()).then((res) =>{
      $("#theTitle").val("")
      $("#theContent").val("")
      console.log('this is the response',res)
      this.gogetdata()
     })
    }

    gogetdata() {
      fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
          this.setState({
              blogs:  data
          });           
      })      
    }

    render() {
        return (
            <React.Fragment>
<nav className="col-3 mt-5 align-self-center border-right bg-secondary ">

<div className ="mt-3">
  <div className="form-group">
    <label htmlFor="theTitle">Title</label>
    <input type="text" className="form-control" id="theTitle" placeholder="Title"/>
  </div>
  <div className="form-group">
    <label htmlFor="theContent">Start Here</label>
    <textarea className="form-control" id="theContent" placeholder="Start Typing Here." rows="3"></textarea>
  </div>
  <button type="submit" className="btn btn-primary btn-block" onClick={event => {
            this.handleSubmitClick();
          }}>Submit</button>
</div>
<hr className="bg-white"/>
<div className="text-center my-1 text-white">All Post</div>

<div className="list-group" style={{height: "61vh", overflowY: 'scroll', position: 'relative'}}>
  {this.state.blogs.map(element => {
    return CreateLinks(element)
  })}
</div>
        </nav>  
          </React.Fragment>
        );
    }
}

export default SideNavigation;