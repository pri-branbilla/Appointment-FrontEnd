import React, { Component, Fragment } from 'react';
import Input from '../components/Input';
import FormAlert from '../components/FormAlert';
import { sendAppointment } from '../requests';

class NewAppointment extends Component {
  constructor() {
    super()
    this.state = {
      formSent: false,
      message: '',
      success: false,
      name: '',
      phone: '',
      email: '',
      date: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleSubmit(event, errors) {
    event.preventDefault()
    if (errors) {
      this.setState({
        formSent: true,
      })
      return
    }
    const data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      date: this.state.date,
    }
    sendAppointment(data, (error) => {
      this.setState({
        formSent: true,
        message: error? "Failed to create appointment" : "Created successfully!",
        success: error? false : true,
      })
    })
    return
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  changePhone = (event) => {
    this.setState({
      phone: event.target.value,
    })
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  changeDate = (event) => {
    this.setState({
      date: event.target.value,
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
          labelFor="name"
          labelName="Name"
          onChange={this.changeName}
          inputType="text"
          placeholder="Full name"
        />
        <Input
          labelFor="phone"
          labelName="Phone number"
          onChange={this.changePhone}
          inputType="text"
          placeholder="Phone number"
        />
        <Input
          labelFor="email"
          labelName="Email"
          onChange={this.changeEmail}
          inputType="email"
          placeholder="Email"
        />
        <Input
          labelFor="date"
          labelName="Date"
          onChange={this.changeDate}
          inputType="datetime-local"
        />
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
      </Fragment>
    );
  }
}

export default NewAppointment
