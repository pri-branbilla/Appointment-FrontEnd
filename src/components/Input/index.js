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
        value,
        smallMessage,
        min,
        max,
    } = this.props

    return (
        <div className="form-group">
            <label htmlFor={labelFor}>{labelName}</label>
            <input min={min} max={max} type={inputType} onChange={onChange} className="form-control" id={labelFor} aria-describedby={describedBy} placeholder={placeholder} value={value}/>
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
