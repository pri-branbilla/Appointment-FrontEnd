import React, { PureComponent } from 'react';

class FormAlert extends PureComponent {
  render() {
    const {
        success,
        message,
    } = this.props

    const className = success ? "alert alert-success" : "alert alert-danger" 
    return (
        <div className={className} role="alert">
            {message}
        </div>
    );
  }
}

export default FormAlert
