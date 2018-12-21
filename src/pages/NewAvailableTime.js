import React, { Component, Fragment } from 'react'
import { Select, FormAlert, Input, Forbidden, Loading } from '../components'
import { buildArray, formatOnlyDate } from '../libs/utils'
import { newAvailableDate } from '../requests'
import { isLoggedIn } from '../libs/Firebase'

const sentMessages = {
  greaterFinishDate: "Your final date must be greater than the start date.",
  greaterFinishTime: "Your final appointment time must be greater than the start time.",
  failSend: "Failed to send new available dates.",
  success: "Created successfully!",
}
class NewAvailableTime extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      currentUser: null,
      formSent: false,
      message: '',
      stepDays: 0,
      success: false,
      startDay: '',
      startMonth: '',
      startYear: '',
      finalDay: '',
      finalMonth: '',
      finalYear: '',
      startHour: '',
      finishHour: '',
      step: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount = () => {
    isLoggedIn((user) => {
      this.setState({
        currentUser: user,
        loading: false,
      })
    })
  }

  dateInputError = (startDate, finalDate) => {
    let errorMessage
    if (formatOnlyDate(finalDate) < formatOnlyDate(startDate)) {
      errorMessage = sentMessages.greaterFinishDate
    } else {
      return false
    }
    this.setState({
      formSent: true,
      success: false,
      message: errorMessage,
    })
    return true
  }

  timeInputError = (startTime, finishTime) => {
    let errorMessage
    if (startTime > finishTime) {
      errorMessage = sentMessages.greaterFinishTime
    } else {
      return false
    }
    this.setState({
      formSent: true,
      success: false,
      message: errorMessage,
    })
    return true
  }

  handleSubmit(event, errors) {
    event.preventDefault()
    const startDate = {
      day: this.state.startDay,
      month: this.state.startMonth,
      year: this.state.startYear
    }
    const finalDate = {
      day: this.state.finalDay,
      month: this.state.finalMonth,
      year: this.state.finalYear
    }
    if (errors
      || this.dateInputError(startDate, finalDate)
      || this.timeInputError(this.state.startHour, this.state.finishHour)) {
      this.setState({
        formSent: true,
      })
      return
    }
    const bodyRequest = {
      startDate: formatOnlyDate(startDate),
      finalDate: formatOnlyDate(finalDate),
      startHour: this.state.startHour,
      finishHour: this.state.finishHour,
      daysStep: Number(this.state.stepDays),
      step: Number(this.state.step)
    } 
    console.log(bodyRequest)
    newAvailableDate(bodyRequest, (error) => {
      console.log(error)
      this.setState({
        formSent: true,
        message: error ? sentMessages.failSend : sentMessages.success,
        success: error ? false : true,
      })
    })
    return
  }

  renderList = () => {
    const days = buildArray(31)
    const months = buildArray(12)
    const years = buildArray(2021, 2018)
    const steps = [10, 20, 30]

    return (
    <Fragment>
      <h1>Add new available time</h1>
      { this.state.formSent && (
        <FormAlert
          success={this.state.success}
          message={this.state.message}
        />
      )}
      <form id="dateform" onSubmit={this.handleSubmit}>
      <p className="font-weight-bold">From</p>
      <div className="form-row">
        <Select
          labelName="Day"
          selectId="startDay"
          formId="dateform"
          selectName="days"
          values={days}
          onChange={this.onChange}
          required
        />
        <Select
          labelName="Month"
          selectId="startMonth"
          formId="dateform"
          selectName="months"
          values={months}
          onChange={this.onChange}
          required
        />
        <Select
          labelName="Year"
          selectId="startYear"
          formId="dateform"
          selectName="years"
          values={years}
          onChange={this.onChange}
          required
        />
      </div>
      <p className="font-weight-bold">To</p>
      <div className="form-row">
        <Select
          labelName="Day"
          selectId="finalDay"
          formId="dateform"
          selectName="days"
          values={days}
          onChange={this.onChange}
          required
        />
        <Select
          labelName="Month"
          selectId="finalMonth"
          formId="dateform"
          selectName="months"
          values={months}
          onChange={this.onChange}
          required
        />
        <Select
          labelName="Year"
          selectId="finalYear"
          formId="dateform"
          selectName="years"
          values={years}
          onChange={this.onChange}
          required
        />
      </div>
      <p className="font-weight-bold">Repeat every:</p>
      <div className="form-group col-md-4">
          <select
            id="stepDays"
            className="form-control"
            onChange={this.onChange}
            name="stepDays"
            form="dateform"
          >
          <option value=""></option>
          <option value={7}>1 week</option>
          <option value={14}>2 weeks</option>
          </select>
      </div>
      <p className="font-weight-bold">Time</p>
      <div className="form-row">
        <Input
          mask="99:00"
          labelFor="startHour"
          labelName="Start at"
          onChange={this.onChange}
          inputType="text"
        />
        <Input
          mask="99:00"
          labelFor="finishHour"
          labelName="Finish at"
          onChange={this.onChange}
          inputType="text"
        />
        <Select
          labelName="Interval (minutes)"
          selectId="step"
          formId="dateform"
          selectName="setps"
          values={steps}
          onChange={this.onChange}
        />
      </div>
        <input type="submit" className="btn btn-success" value="Submit" />
    </form>
    </Fragment>
  )}

  renderForbidden = () => (
    <Forbidden />
  )

  onChange (e) {
      const name = e.target.id
      console.log(e.target.id)
      this.setState({
          [name]: e.target.value,
      })
  }

  render() {
    const authorized = this.state.currentUser ? this.renderList() : this.renderForbidden()
    const loading = this.state.loading? <Loading /> : authorized
    return loading
  }
}

export default NewAvailableTime
