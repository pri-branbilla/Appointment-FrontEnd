import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar';
import Main from './pages/Main';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div class="container">
          <div class="jumbotron jumbExtra">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
