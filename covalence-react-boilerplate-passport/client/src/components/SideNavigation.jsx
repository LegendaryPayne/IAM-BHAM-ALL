import React from 'react';
import CreateLinks from './CreateLinks';
import { checkLogin } from '../services/user';

class SideNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          blogs: []
        }
    }

    componentDidMount() {
    if (checkLogin) {
    this.gogetdata()  
    }
    }
    handleSubmitClick() {
    let theTitle = $("#theTitle").val()
    let theContent = $("#theContent").val()
    let theTags = $("#theTags").val()
    let sending = JSON.stringify({
      title: theTitle,
      content: theContent,
      tags: theTags
    });
    fetch('/api/blogs', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: sending
     }).then
     (res => res.json()).then((res) =>{
      $("#theTitle").val("")
      $("#theContent").val("")
      $("#theTags").val("")
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
      });      
    }

    gettags() {
      fetch(`/api/blogs/tags/`)
      .then(res => res.json())
      .then(thisdata => {
        let thetags = thisdata.map(item => {
          return ((item.Tags))
        });
        element.tags = thetags
        console.log(e)
      }); 
    }

    thesidebar() {
      return (
        <React.Fragment>
<div className ="pt-3 mt-5">
<div className="form-group">
<label htmlFor="theTitle">Title</label>
<input type="text" className="form-control" id="theTitle" placeholder="Title"/>
</div>
<div className="form-group">
<label htmlFor="theContent">Start Here</label>
<textarea className="form-control" id="theContent" placeholder="Start Typing Here." rows="3"></textarea>
</div>
<div className="form-group">
<label htmlFor="theContent">Tags</label>
<textarea className="form-control" id="theTags" placeholder=" tags, goes, here" rows="1"></textarea>
</div>
<button type="submit" className="btn btn-primary btn-block" onClick={event => {
        this.handleSubmitClick();
      }}>Submit</button>
</div>
<hr className="bg-white"/>
<div className="text-center my-1 text-white">All Post</div>

<div className="list-group" style={{height: "40vh", overflowY: 'scroll', position: 'relative'}}>
{this.state.blogs.map(element => {

return CreateLinks(element)
})}
</div>
      </React.Fragment>
    );
    }

    render() {
        return (
            <React.Fragment>
            <nav className="col-3 mt-5 align-self-center border-right bg-secondary fixed" style={{height: '94.75vh'}}>
            {this.thesidebar()}
            </nav> 
          </React.Fragment>
        );
    }
}

export default SideNavigation;