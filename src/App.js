import React, { Component } from "react";
import LandingPage from "./LandingPage";
import Project from "./Project";
import Contact from "./Contact";
import heartIcon from "./img/heart.png";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Youxi Li</p>
          <img className="heart-icon" src={heartIcon} alt="Heart icon" />
        </header>
        <LandingPage />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
