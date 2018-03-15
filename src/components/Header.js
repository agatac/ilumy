import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="row p-2 text-muted">
    <div className="col-4">
      <h1 className="p-0 m-0 text-dark">Calendar</h1>
    </div>
    <div className="col-8 d-flex flex-row">
      <div
        className="mr-4 d-flex align-items-center"
        onClick={e => props.prevMonth(e)}
        onKeyDown={e => props.prevMonth(e)}
        role="button"
        tabIndex={0}
      >
        <i data-feather="chevron-left" />
      </div>
      <div
        className="mr-4 d-flex align-items-center"
        onClick={e => props.nextMonth(e)}
        onKeyDown={e => props.prevMonth(e)}
        role="button"
        tabIndex={0}
      >
        <i data-feather="chevron-right" />
      </div>
      <h3 className="d-flex align-items-center p-0 m-0">
        {props.month}, {props.year}
      </h3>
    </div>
  </div>
);

Header.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  prevMonth: PropTypes.func.isRequired,
  nextMonth: PropTypes.func.isRequired,
};

export default Header;
