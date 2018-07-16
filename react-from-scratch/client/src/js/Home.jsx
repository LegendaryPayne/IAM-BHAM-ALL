import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom'
import CreateCards from './cards';

class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            chirps: [['nextid','b','c']]
        };
    }
    
    componentDidMount() {
this.goGetCards()
    } 

    handleClick() {
        let newDate = this.getYear()
        let newChirp = {message: $("#message-text").val(), date: newDate.toString()}
        console.log('sending');
        fetch('/api/chirps', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newChirp)
           }).then((res) =>{
            $("#message-text").val("")
            this.goGetCards()
           })
    }
    getYear() {
        return new Date();
    }      

    goGetCards() {
        fetch('/api/chirps')
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then(data => {
            console.log(data)
            this.setState({
                chirps:  data
            });           
        })        
    }

    render() {

        $("#testModal").on("show.bs.modal", (event) => {
            var button = $(event.relatedTarget);
            var recipient = button.data("whatever");
            console.log(recipient);
            $("#testModalLabel").text("Update Chirp: #" + recipient);
        
            $("#chirpUpdate").click(() => {
                let newDate = this.getYear();
                let updateChirp = {message: $("#message-editor").val(), date: newDate.toString()}
                console.log('editing');
                fetch(`/api/chirps/${recipient}`, {
                    method: 'PUT',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(updateChirp)
                   }).then((res) =>{
                    $("#message-editor").val("")
                    this.goGetCards()
                   })
              });
              $(`#DeleteChirp${recipient}`).click(() => {
                $(`#chirpNum${recipient}`).remove();
                fetch(`/api/chirps/${recipient}`, {
                    method: 'DELETE',
                   })
                });
          });

    return (
      <React.Fragment>
      <h1 className="text-center mt-5">Welcome to Chirper 2.0!</h1>
      <div className="addchirp text-center">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#chirp">Click Here to Add A Chirp</button>
 
          <div className="modal fade" id="chirp" tabIndex="-1" role="dialog" aria-labelledby="chirpLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="chirpLabel">New Chirp</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                              <div className="form-group">
                                  <label htmlFor="message-text" className="col-form-label">Message:</label>
                                  <textarea className="form-control" id="message-text" name="theMessage"></textarea>
                              </div>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" id='chirpSubmit' onClick={ (event) => {
            this.handleClick()
        }} data-dismiss="modal">Send Chirp</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <hr className="featurette-divider"/>
      <div className="chirpsContainer">
          <div className="row d-flex justify-content-between">
{this.state.chirps.map(element => {
    let [x,y,z] = element
    return CreateCards(x,y,z)
})}
          </div>
          <div className="modal fade" id="testModal" tabIndex="-1" role="dialog" aria-labelledby="testModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="testModalLabel">Change</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <form>
                              <div className="form-group">
                                  <label htmlFor="message-editor" className="col-form-label">Message:</label>
                                  <textarea className="form-control" id="message-editor"></textarea>
                              </div>
                          </form>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary" data-dismiss="modal"id="chirpUpdate">Update</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </React.Fragment>

    );
  }
}

export default App;