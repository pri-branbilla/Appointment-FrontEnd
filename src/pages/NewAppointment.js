import React, { Component, Fragment } from 'react';
import { Input, FormAlert, Loading } from '../components'
import { sendAppointment, getAvailableDate, scheduleDate } from '../requests';
import { formatDateToBr } from '../libs/utils';

const sentMessages = {
  appointmentCreation: "Failed to create appointment, try again later.",
  scheduleDate: "Failed to schedule in this date, try again later.",
  success: "Scheduled appointment successfully!",
}
class NewAppointment extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      formSent: false,
      message: '',
      success: false,
      name: '',
      phone: '',
      email: '',
      dates: [],
      date: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateDates = () => {
    getAvailableDate((availableDates) => {
      this.setState({
        dates: availableDates,
        loading: false,
      })
    })
  }
  
  componentWillMount = () => {
    this.updateDates()
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
    const scheduledDate = {
      date: this.state.date,
    }
    scheduleDate(scheduledDate, (error) => {
      if (!error) {
        return sendAppointment(data, (error) => {
          this.setState({
            formSent: true,
            message: error? sentMessages.appointmentCreation : sentMessages.success,
            success: error? false : true,
          })
          if (!error) {
            this.updateDates()
          }
        })
      }
      console.log(error)
      this.setState({
        formSent: true,
        message: sentMessages.scheduleDate,
        success: false,
      })
    })
    return
  }

  renderForm = () => {
    const options = this.state.dates.map((value, i) => (
      <option key={i} value={value.schDate}>{formatDateToBr(value.schDate)}</option>
    ))
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
          onChange={this.onChange}
          inputType="text"
          placeholder="Full name"
        />
        <Input
          mask="(99) 99999-9999"
          labelFor="phone"
          labelName="Phone number"
          onChange={this.onChange}
          inputType="tel"
        />
        <Input
          labelFor="email"
          labelName="Email"
          onChange={this.onChange}
          inputType="email"
        />
        <div className="form-group col-md-4">
            <label htmlFor="date">Date</label>
            <select
              id="date"
              className="form-control"
              onChange={this.onChange}
              name="Date"
              form="appointment"
            >
            <option value=""></option>
                {options}
            </select>
        </div>
        <input type="submit" className="btn btn-success" value="Submit" />
      </form>
      </Fragment>
    );
  }

  onChange (e) {
    const name = e.target.id
    console.log(e.target.id)
    this.setState({
        [name]: e.target.value,
    })
}

  render = () => {
    return this.state.loading ? <Loading /> : this.renderForm()
  }
}

export default NewAppointment
