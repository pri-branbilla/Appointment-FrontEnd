import React, { Component, Fragment } from 'react'
import { getAppointments } from '../requests';
import ScheduledList from '../containers/ScheduledList';

class ScheduledAppointments extends Component {
  constructor() {
    super()
    this.state = {
      scheduledList: []
    }
  }

  componentWillMount = () => {
    getAppointments((data) => {
      console.log(data)
      this.setState({
        scheduledList: data,
      })
    })
  }


  render() {
    return (
      <Fragment>
        <h1>Scheduled appointments</h1>
        <ScheduledList
          scheduledList={this.state.scheduledList}
        />
      </Fragment>
    );
  }
}

export default ScheduledAppointments
