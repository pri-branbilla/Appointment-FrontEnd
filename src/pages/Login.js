import React, { Component, Fragment } from 'react';
import Input from '../components/Input';
import FormAlert from '../components/FormAlert';
import { authenticate } from '../libs/Firebase'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      formSent: false,
      message: '',
      success: false,
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    authenticate(this.state.email, this.state.password, (error) => {
      this.setState({
        formSent: true,
        success: error ? false : true,
        message: error ? error.message : "Logged in!"
      })
    })
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  changePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    return (
      <Fragment>
        { this.state.formSent && (
          <FormAlert
            success={this.state.success}
            message={this.state.message}
          />
        )}
        <form onSubmit={this.handleSubmit}>
        <Input
          labelFor="email"
          labelName="Email"
          onChange={this.changeEmail}
          inputType="email"
        />
        <Input
          labelFor="password"
          labelName="Password"
          onChange={this.changePassword}
          inputType="password"
        />
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
      </Fragment>
    );
  }
}

export default Login
