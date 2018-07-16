import React from 'react';
import User1 from './Images/User1.jpg'

let startingChirps = [{id: 0, emotion: 'test', message: 'test', date: 'test'}, {id: 1, emotion: 'test', message: 'test', date: 'test'}]
let chirpCounter=2
class Welcoming extends React.Component {
constructor (props) {
    super(props)
    this.state = {
        id: 1,
        name: {
          firstname: "Jimmie",
          lastname: "Payne"
        },
        image: User1,
        user: "jlpayne111",
        chirps: startingChirps
}
console.log(this.state.chirps)
}  

handleClick = (emotion, birdie) => {
    let newDate = this.getYear()
    console.log (emotion, birdie, newDate)
    let newChirp = {id: chirpCounter, emotion: emotion, message: birdie, date: newDate.toString()}
    chirpCounter++
     startingChirps.push(newChirp)
     this.setState({
      chirps:  startingChirps
     }
     )
     emotion = '';
     birdie = '';
}
getYear() {
    return new Date();
}  

render() {
    return (
<React.Fragment>
<div className="jumbotron text-center">
  <h1 className="display-4">Hello, {this.state.name.firstname} {this.state.name.lastname} <img src={this.state.image} className="rounded-circle" alt="avator" height="50" width="50"></img> </h1>
  <p className="lead">Welcome to chirper</p>
  <div className="d-flex justify-content-center lead">
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="chirp">Click Here to Add A Chirp!</button>
  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New Chirp</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">How are You feeling?</label>
            <input type="text" className="form-control" id="emotion"/>
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">What Did the Birdie Say?</label>
            <textarea className="form-control" id="birdie"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"
        onClick={ (event) => {
            this.handleClick(document.getElementById('emotion').value, document.getElementById('birdie').value)
        }}
        data-dismiss="modal">Send Chirp</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
<div className='container-fliud'>
<div className='row d-flex flex-row-reverse flex-wrap-reverse'>
{this.state.chirps.map((test)=> {
  console.log([test].valueOf())
  return (
    <React.Fragment>
    <div className='col my-2 mx-auto text-center'>
    <div className="card mx-auto" style={{width: '18em'}}>
    <img className="card-img-top" src={User1} height="100px" width="50px" alt="Card image cap"></img>
    <div className="card-body">
      <p className="card-text">{test.emotion}</p>
      <p className="card-text">{test.message}</p>
      <p className="card-text">{test.date}</p>
    </div>
  </div>
  </div>
    </React.Fragment>
)
})}
</div>
</div>
</React.Fragment>
    )
  }
}

export default Welcoming;
