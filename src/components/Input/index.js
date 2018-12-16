import React, { PureComponent } from 'react';

class Input extends PureComponent {
  render() {
    const {
        labelFor,
        labelName,
        inputType,
        placeholder,
        value,
        describedBy,
        smallMessage,
    } = this.props

    return (
        <div class="form-group">
            <label for={labelFor}>{labelName}</label>
            <input type={inputType} class="form-control" value={value} id={labelFor} aria-describedby={describedBy} placeholder={placeholder} />
            {
                smallMessage && (
                    <small id={describedBy} class="form-text text-muted">{smallMessage}</small>
                )
            }
        </div>
    );
  }
}

export default Input
