import React from 'react';



class NavigationBottom extends React.Component {
  render() {
    return (
<React.Fragment>
    <nav className="fixed-bottom navbar navbar-expand-md navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Chirper</a>
    </nav>
</React.Fragment>
    )
  }
}

export default NavigationBottom;