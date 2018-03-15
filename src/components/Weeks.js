import React from 'react';
import PropTypes from 'prop-types';

const Weeks = (props) => {
  this.breakBlock = key => <div key={key} className="w-100" />;
  this.emptyDay = key => (
    <div
      key={key}
      className={`d-none border p-2 ${props.viewAsList ? '' : 'd-sm-flex col-sm'}`}
    >{''}
    </div>
  );
  this.calendarDay = (key, day) => (
    <div
      key={key}
      className={`border p-2 text-muted ${props.viewAsList ? '' : 'col-sm'}`}
      style={{ height: `${props.viewAsList ? '58px' : `calc((100vh - 8rem) / ${props.weeksInMonth})`}` }}
    >
      <span>{day}</span>
      {
        props.viewAsList &&
        <span className="ml-3">
          {props.weekdaysShort[((props.firstDay - 1) + day) % 7]}
        </span>
      }
    </div>
  );

  this.renderWeeks = () => {
    const days = [];
    // if month doesn't start on Sunday (0)
    let i = 0;
    for (i; i < props.firstDay; i += 1) {
      days.push(this.emptyDay(`${i}empty-begin`));
    }
    // render all days
    let day = 1;
    for (day; day <= props.daysInMonth; day += 1) {
      if (!props.viewAsList && ((props.firstDay - 1) + day) % 7 === 0) {
        days.push(this.breakBlock(`${day}break`));
      }
      days.push(this.calendarDay(`${day}day`, day));
    }
    // if month doesn't end on Sunday
    let j = 6;
    for (j; j > props.lastDay; j -= 1) {
      days.push(this.emptyDay(`${j}empty-end`));
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
};

export default Weeks;
