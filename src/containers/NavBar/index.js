import React, { Component, Fragment } from 'react';
import { isLoggedIn, logout } from '../../libs/Firebase'
import { Link } from 'react-router-dom'
import './styles.css'

const RightNav = ({ authUser }) => (
    authUser ? <AuthRightNav /> : <NonAuthRightNav />
)

const logoutClick = () => {
    logout(() => {
        console.log("LOGGED OUT")
    })
}

const AuthRightNav = () => (
    <Fragment>
        <span className="navbar-text spaced">
            <Link to="/medicalappointments">Scheduled appointments</Link>
        </span>
        <span className="navbar-text spaced">
            <Link to="/newavailabletime">Add new available time</Link>
        </span>
        <span className="navbar-text spaced">
            <Link onClick={logoutClick} to="/">Logout</Link>
        </span>
    </Fragment>
)

const NonAuthRightNav = () => (
    <Fragment>
        <span className="navbar-text spaced">
            <Link to="/login">Admin</Link>
        </span>
    </Fragment>
)

class NavBar extends Component {
    constructor() {
        super()

        this.state = {
            currentUser: null,
        }
    }

    componentWillMount = () => {
        isLoggedIn((user) => this.setState({
            currentUser: user,
        }))
    }
  render() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navCustom">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/appointments/new">New appointment</Link>
                    </li>
                </ul>
                    <RightNav
                        authUser={this.state.currentUser}
                    />
                </div>
            </nav>
        </Fragment>
    );
  }
}

export default NavBar
