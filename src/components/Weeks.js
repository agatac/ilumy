import React from 'react';
import PropTypes from 'prop-types';

const Weeks = (props) => {
  this.breakBlock = key => <div key={key} className="w-100" />;
  this.emptyDay = key => <div key={key} className="d-none d-sm-flex col-sm border p-2">{''}</div>; //eslint-disable-line
  this.calendarDay = (key, day, weeksInMonth) => (
    <div
      key={key}
      className="col-sm border p-2 text-muted"
      style={{ height: `calc((100vh - 8rem) / ${weeksInMonth})` }}
    >
      <span>{day}</span>
    </div>
  );

  this.renderWeeks = (firstDay, lastDay, daysInMonth, weeksInMonth) => {
    const days = [];
    // if month doesn't start on Sunday (0)
    let i = 0;
    for (i; i < firstDay; i += 1) {
      days.push(this.emptyDay(`${i}empty-begin`));
    }
    // render all days
    let day = 1;
    for (day; day <= daysInMonth; day += 1) {
      if (((firstDay - 1) + day) % 7 === 0) {
        days.push(this.breakBlock(`${day}break`));
      }
      days.push(this.calendarDay(`${day}day`, day, weeksInMonth));
    }
    // if month doesn't end on Sunday
    let j = 6;
    for (j; j > lastDay; j -= 1) {
      days.push(this.emptyDay(`${j}empty-end`));
    }
    return days;
  };

  return (
    <div className="row calendar">
      {this.renderWeeks(props.firstDay, props.lastDay, props.daysInMonth, props.weeksInMonth)}
    </div>
  );
};

Weeks.propTypes = {
  firstDay: PropTypes.string.isRequired,
  lastDay: PropTypes.string.isRequired,
  daysInMonth: PropTypes.number.isRequired,
  weeksInMonth: PropTypes.number.isRequired,
};

export default Weeks;
