import React, { Component, Fragment } from 'react';
import Input from '../components/Input';
import FormAlert from '../components/FormAlert';

class NewAppointment extends Component {
  state = {
    formSent: false,
    success: false,
    appointment: {
      name: '',
      phone: '',
      email: '',
      date: '',
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const {
      name,
      email,
      phone,
      date,
    } = this.state.appointment
  
    return (
      <Fragment>
        { this.state.formSent && (
          <FormAlert
            success={this.state.success}
          />
        )}
        <form onSubmit={this.handleSubmit}>
        <Input
          labelFor="name"
          labelName="Name"
          value={name}
          inputType="text"
          placeholder="Full name"
        />
        <Input
          labelFor="phone"
          labelName="Phone number"
          value={phone}
          inputType="text"
          placeholder="Phone number"
        />
        <Input
          labelFor="email"
          labelName="Email"
          value={email}
          inputType="email"
          placeholder="Email"
        />
        <Input
          labelFor="date"
          labelName="Date"
          value={date}
          inputType="datetime-local"
        />
        <input type="submit" class="btn btn-success" value="Submit" />
      </form>
      </Fragment>
    );
  }
}

export default NewAppointment
