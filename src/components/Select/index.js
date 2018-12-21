import React, { PureComponent } from 'react'
class Select extends PureComponent {
  render() {
    const {
        required,
        labelName,
        selectId,
        formId,
        selectName,
        values,
        onChange,
    } = this.props

    const options = values.map((value, i) => (
        <option key={i+value} value={value}>{value}</option>
    ))

    return (
        <div className="form-group col-md-4">
            <label htmlFor={selectId}>{labelName}</label>
            <select
                id={selectId}
                className="form-control"
                onChange={onChange}
                name={selectName}
                form={formId}
                required={required}
            >
            <option value=""></option>
                {options}
            </select>
        </div>
    );
  }
}

export default Select
