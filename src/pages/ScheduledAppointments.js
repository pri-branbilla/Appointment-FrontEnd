import React, { Component, Fragment } from 'react'
import FormAlert from '../components/FormAlert'
import Select from '../components/Select'
import { buildArray, formatDate } from '../libs/utils'
import { getAppointments } from '../requests';

class ScheduledAppointments extends Component {
  constructor() {
    super()
    this.state = {
      day: '',
      month: '',
      year: '',
      hour: '',
      minute: '',
    }
  }

  componentWillMount = () => {
    getAppointments((data) => {
      console.log(data)
    })
  }


  render() {
    return (
      <Fragment>
        
      </Fragment>
    );
  }
}

export default ScheduledAppointments
