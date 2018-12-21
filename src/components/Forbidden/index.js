import React, { PureComponent } from 'react';
import FormAlert from '../FormAlert';

class Forbidden extends PureComponent {
  render() {
    return (
        <FormAlert
            message="You don't have access to this page."
        />
    );
  }
}

export default Forbidden
