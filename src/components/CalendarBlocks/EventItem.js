import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  fontSize: '1em',
};

const EventItem = (props) => {
  return (
    <span className="badge badge-pill badge-secondary ml-4" style={styles}>
      {props.events.length}
    </span>
  );
};

EventItem.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object),
};
EventItem.defaultProps = {
  events: [],
};

export default EventItem;
