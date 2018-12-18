import React, { PureComponent } from 'react';

class Input extends PureComponent {
  render() {
    const {
        labelFor,
        labelName,
        inputType,
        placeholder,
        onChange,
        describedBy,
        smallMessage,
    } = this.props

    return (
        <div className="form-group">
            <label htmlFor={labelFor}>{labelName}</label>
            <input type={inputType} onChange={onChange} className="form-control" d={labelFor} aria-describedby={describedBy} placeholder={placeholder} />
            {
                smallMessage && (
                    <small id={describedBy} className="form-text text-muted">{smallMessage}</small>
                )
            }
        </div>
    );
  }
}

export default Input
