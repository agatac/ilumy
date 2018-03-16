import React from 'react';
import PropTypes from 'prop-types';

const DayBlock = (props) => {
  return (
    <div
      className={props.classes}
      style={props.styles}
    >
      <span>{props.day}</span>
      {
        props.dayName &&
        <span className="ml-3">
          {props.dayName}
        </span>
      }
      {
        props.children
      }
    </div>
  );
};

// export default function DayBlock(props, children) {
//
// }
DayBlock.propTypes = {
  classes: PropTypes.string,
  styles: PropTypes.object, // eslint-disable-line
  day: PropTypes.number.isRequired,
  dayName: PropTypes.string,
  children: PropTypes.any, // eslint-disable-line
};
DayBlock.defaultProps = {
  classes: '',
  styles: {},
  dayName: '',
};

export default DayBlock;
