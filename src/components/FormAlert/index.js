import React, { PureComponent } from 'react';

class FormAlert extends PureComponent {
  render() {
    const {
        success
    } = this.props
    return (( success &&
        <div class="alert alert-success" role="alert">
            Appointment scheduled successfully!
        </div> )
        ||
        <div class="alert alert-danger" role="alert">
            Failed to schedule appointment.
        </div>
    );
  }
}

export default FormAlert
