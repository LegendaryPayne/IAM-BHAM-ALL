import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import NavigationBottom from "./Components/NavigationBottom";
import Welcoming from "./Components/Welcoming";


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Welcoming />
        <NavigationBottom />
      </React.Fragment>
    );
  }
}

export default App;
