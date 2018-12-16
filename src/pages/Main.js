import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login';
import Home from './Home'
import NewAppointment from './NewAppointment';

class Main extends Component {
  render() {
    return (
      <main>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path="/login" component={Login} />
              <Route path="/appointments/new" component={NewAppointment} />
          </Switch>
      </main>
    );
  }
}

export default Main;
