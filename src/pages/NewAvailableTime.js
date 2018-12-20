import React, { Component, Fragment } from 'react'
import { Select, FormAlert, Input } from '../components'
import { buildArray, formatDateToDefault } from '../libs/utils'
import { newAvailableDate } from '../requests'

class NewAvailableTime extends Component {
  constructor() {
    super()
    this.state = {
      formSent: false,
      message: '',
      success: false,
      day: '',
      month: '',
      year: '',
      startHour: '',
      finishHour: '',
      step: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit(event, errors) {
    event.preventDefault()
    if (errors) {
      this.setState({
        formSent: true,
      })
      return
    }
    const bodyRequest ={
      startDate: formatDateToDefault(this.state, this.state.startHour),
      finalDate: formatDateToDefault(this.state, this.state.finishHour),
      step: Number(this.state.step)
    } 
    console.log(bodyRequest)
    newAvailableDate(bodyRequest, (error) => {
      this.setState({
        formSent: true,
        message: error ? "Failed to send new date" : "Created successfully!",
        success: error ? false : true,
      })
    })
    return
  }


  onChange (e) {
      const name = e.target.id
      console.log(e.target.id)
      this.setState({
          [name]: e.target.value,
      })
  }

  render() {
    const days = buildArray(31)
    const months = buildArray(12)
    const years = buildArray(2021, 2018)
    const steps = [10, 20, 30]
    return (
      <Fragment>
        { this.state.formSent && (
          <FormAlert
            success={this.state.success}
            message={this.state.message}
          />
        )}
        <form id="dateform" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <Select
            labelName="Day"
            selectId="day"
            formId="dateform"
            selectName="days"
            values={days}
            onChange={this.onChange}
          />
          <Select
            labelName="Month"
            selectId="month"
            formId="dateform"
            selectName="months"
            values={months}
            onChange={this.onChange}
          />
          <Select
            labelName="Year"
            selectId="year"
            formId="dateform"
            selectName="years"
            values={years}
            onChange={this.onChange}
          />
        </div>
        <div className="form-row">
          <Input
            mask="99:99"
            labelFor="startHour"
            labelName="Start at"
            onChange={this.onChange}
            inputType="text"
          />
          <Input
            mask="99:99"
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
    );
  }
}

export default NewAvailableTime
