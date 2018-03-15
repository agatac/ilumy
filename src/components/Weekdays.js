import React from 'react';
import PropTypes from 'prop-types';

const Weekdays = (props) => {
  this.renderWeekdays = () => {
    return props.weekdaysShort.map((day) => {
      return (<div key={day} className="col-sm border p-3">{day}</div>);
    });
  };

  return (
    <div className="row d-none d-sm-flex">
      {this.renderWeekdays()}
    </div>
  );
};

Weekdays.propTypes = {
  weekdaysShort: PropTypes.arrayOf(PropTypes.string),
};

Weekdays.defaultProps = {
  weekdaysShort: [],
};

export default Weekdays;
