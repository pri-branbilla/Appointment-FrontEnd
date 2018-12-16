import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

class NavBar extends Component {
  render() {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light navCustom">
                <Link to="/">Home</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <Link to="/appointments/new">New appointment</Link>
                    </li>
                </ul>
                    <span class="navbar-text spaced">
                    <Link to="#">Available times</Link>
                    </span>
                    <span class="navbar-text spaced">
                    <Link to="#">Logout</Link>
                    </span>
                    <span class="navbar-text spaced">
                    <Link to="/login">Login</Link>
                    </span>
                    <span class="navbar-text">
                    <Link to="#">Register</Link>
                    </span>
                </div>
            </nav>
        </Fragment>
    );
  }
}

export default NavBar
