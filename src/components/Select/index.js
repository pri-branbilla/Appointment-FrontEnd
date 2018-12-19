import React, { PureComponent } from 'react'
class Select extends PureComponent {
  render() {
    const {
        labelName,
        selectId,
        formId,
        selectName,
        values,
        onChange,
    } = this.props

    const options = values.map(value => (
        <option value={value}>{value}</option>
    ))

    return (
        <div className="form-group">
            <label htmlFor={selectId}>{labelName}</label>
            <select id={selectId} className="form-control" onChange={onChange} name={selectName} form={formId} className="form-control form-control-lg">
                {options}
            </select>
        </div>
    );
  }
}

export default Select
