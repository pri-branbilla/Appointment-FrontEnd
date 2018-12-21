import React, { Component, Fragment } from 'react'
import { getAppointments } from '../requests'
import { ScheduledList } from '../containers'
import { Forbidden, Loading } from '../components'
import { isLoggedIn } from '../libs/Firebase';

class ScheduledAppointments extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      currentUser: null,
      scheduledList: []
    }
  }

  componentWillMount = () => {
    isLoggedIn((user) => {
      this.setState({
        currentUser: user,
      })
      if (user) {
        getAppointments((data) => {
          console.log(data)
          this.setState({
            scheduledList: data,
            loading: false,
          })
        })
      }
      this.setState({
        loading: false,
      })
    })
  }

  renderList = () => (
    <Fragment>
      <h1>Scheduled appointments</h1>
      <ScheduledList
        scheduledList={this.state.scheduledList}
      />
    </Fragment>
  )

  renderForbidden = () => (
    <Forbidden />
  )

  render() {
    const authorized = this.state.currentUser ? this.renderList() : this.renderForbidden()
    const loading = this.state.loading ? <Loading /> : authorized

    return loading
  }
}

export default ScheduledAppointments
