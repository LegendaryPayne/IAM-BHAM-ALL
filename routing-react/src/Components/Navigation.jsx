import React from 'react';



class Navigation extends React.Component {
  render() {
    return (
<React.Fragment>
    <nav className="fixed-top navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Studio Ghibli API</a>
    </nav>
</React.Fragment>
    )
  }
}

export default Navigation;