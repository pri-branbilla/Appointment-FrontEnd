import React, { PureComponent } from 'react';
import './styles.css'

class ScheduledItem extends PureComponent {
  render() {
    const {
        name,
        phone, 
        email,
        date,
    } = this.props
    
    return (
        <div className="col-sm extra-margin">
            <ul className="list-group">
                <li className="list-group-item active">{name}</li>
                <li className="list-group-item"><b>Phone:</b> {phone}</li>
                <li className="list-group-item"><b>Email:</b> {email}</li>
                <li className="list-group-item"><b>Time:</b> {date}</li>
            </ul>
        </div>
    );
  }
}

export default ScheduledItem
