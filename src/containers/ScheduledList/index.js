import React, { PureComponent } from 'react';
import ScheduledItem from '../../components/ScheduledItem';
import './styles.css'

class ScheduledList extends PureComponent {
  render() {
    const {
        scheduledList,
    } = this.props

    const items = scheduledList.map(value => (
        <ScheduledItem
            name={value.name}
            phone={value.phone} 
            email={value.email}
            date={value.date}
        />
    ))
    
    return (
        <div className="container">
            <div className="row extra-margin">
                {items}
            </div>
        </div>
    );
  }
}

export default ScheduledList
