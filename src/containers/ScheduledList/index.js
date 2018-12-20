import React, { PureComponent, Fragment } from 'react';
import { groupBy } from 'ramda'
import ScheduledItem from '../../components/ScheduledItem';
import './styles.css'
import { formatDateToBr } from '../../libs/utils';

class ScheduledList extends PureComponent {
    renderItems = (list) => {
        return list.map(value => (
            <ScheduledItem
                name={value.name}
                phone={value.phone} 
                email={value.email}
                date={formatDateToBr(value.date).split(" ")[1]}
            />
        ))
    }

  render() {
    const {
        scheduledList,
    } = this.props
    const convertList = groupBy((item) => {
        return item.date.split("T")[0]
    })
    const scheduled = convertList(scheduledList)
    const final = Object.keys(scheduled).map(
        (date) => (
            <Fragment>
                <h2>{formatDateToBr(date).split(" ")[0]}</h2>
                <div className="row extra-margin">
                    {this.renderItems(scheduled[date])}
                </div>
            </Fragment>
            
        ))
    
    return (
        <div className="container extra-margin">
            {final}
        </div>
    );
  }
}

export default ScheduledList
