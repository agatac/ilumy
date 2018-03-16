import React from 'react';
import PropTypes from 'prop-types';

import BreakBlock from './CalendarBlocks/BreakBlock';
import EmptyBlock from './CalendarBlocks/EmptyBlock';
import DayBlock from './CalendarBlocks/DayBlock';

const Weeks = (props) => {
  this.getYear = (date) => { return date.format('Y'); };
  this.getMonth = (date) => { return date.format('MMMM'); };
  this.getDay = (date) => { return date.format('D'); };

  this.renderWeeks = () => {
    const days = [];
    // if month doesn't start on Sunday (0)
    let i = 0;
    for (i; i < props.firstDay; i += 1) {
      const classes = `d-none border p-2 ${props.viewAsList ? '' : 'd-sm-flex col-sm'}`;
      days.push(EmptyBlock(`${i}empty-begin`, classes));
    }
    // render all days
    let day = 1;
    for (day; day <= props.daysInMonth; day += 1) {
      if (!props.viewAsList && ((props.firstDay - 1) + day) % 7 === 0) {
        days.push(BreakBlock(`${day}break`));
      }
      const dayBlock = (
        <DayBlock
          key={`${day}day`}
          classes={`border p-2 text-muted ${props.viewAsList ? '' : 'col-sm'}`}
          styles={{ height: `${props.viewAsList ? '58px' : `calc((100vh - 8rem) / ${props.weeksInMonth})`}` }}
          day={day}
          dayName={props.viewAsList ? props.weekdaysShort[((props.firstDay - 1) + day) % 7] : ''}
        />
      );
      days.push(dayBlock);
    }
    // if month doesn't end on Sunday
    let j = 6;
    for (j; j > props.lastDay; j -= 1) {
      days.push(EmptyBlock(`${j}empty-end`, `d-none border p-2 ${props.viewAsList ? '' : 'd-sm-flex col-sm'}`));
    }
    return days;
  };

  return (
    <div className={`row calendar ${props.viewAsList ? 'flex-column' : ''}`}>
      {this.renderWeeks()}
    </div>
  );
};

Weeks.propTypes = {
  firstDay: PropTypes.string.isRequired,
  lastDay: PropTypes.string.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  weeksInMonth: PropTypes.number.isRequired, //eslint-disable-line
  viewAsList: PropTypes.bool.isRequired,
  weekdaysShort: PropTypes.arrayOf(PropTypes.string), //eslint-disable-line
  // month: PropTypes.number.isRequired,
  // events: PropTypes.arrayOf(PropTypes.object),
};
// Weeks.defaultProps = {
//   events: [],
// };

export default Weeks;
