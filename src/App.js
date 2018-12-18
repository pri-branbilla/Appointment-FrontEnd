import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar';
import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container container-margin">
          <div className="jumbotron jumbExtra">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
