import React, { PureComponent } from 'react';
import InputMask from 'react-input-mask'

class Input extends PureComponent {
  render() {
    const {
        mask,
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
    const input = (mask) ?
    (<InputMask
        mask={mask}
        min={min}
        max={max}
        type={inputType}
        onChange={onChange}
        className="form-control"
        id={labelFor}
        aria-describedby={describedBy}
        value={value}
        required
      />)
    :
    (<input
        min={min}
        max={max}
        type={inputType}
        onChange={onChange}
        className="form-control"
        id={labelFor}
        aria-describedby={describedBy}
        placeholder={placeholder}
        value={value}
        required
    />)
    return (
        <div className="form-group">
            <label htmlFor={labelFor}>{labelName}</label>
            {input}
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
