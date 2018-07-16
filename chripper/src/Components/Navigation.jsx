import React from 'react';



class Navigation extends React.Component {
  render() {
    return (
<React.Fragment>
<nav className="d-flex justify-content-center navbar navbar-expand-md navbar-dark bg-dark mb-5 rounded-bottom"></nav>
<nav className="fixed-top d-flex justify-content-center navbar navbar-expand-md navbar-dark bg-dark mb-4 rounded-bottom">
      <a className="navbar-brand text-center mx-auto" href="#">Chirper</a>
      <div className="dropdown d-flex justify-content-end float-right">
  <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Options
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">Settings</a>
    <a className="dropdown-item" href="#">Log-out</a>
  </div>
</div>
    </nav>
</React.Fragment>

    )
  }
}

export default Navigation;