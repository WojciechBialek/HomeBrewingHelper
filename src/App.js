import React, { Component } from 'react';
import logo from './logo.svg';
import Beers from "./js/searingbeer";
import StartPage from "./js/startpage";


class App extends Component {
  render() {
    return (
      <div className="App">
          <StartPage/>
        <Beers/>

      </div>
    );
  }
}

export default App;
