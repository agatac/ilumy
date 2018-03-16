import React from 'react';
import PropTypes from 'prop-types';

const EmptyBlock = props => <div className={props.classes} />;

EmptyBlock.propTypes = {
  classes: PropTypes.string,
};
EmptyBlock.defaultProps = {
  classes: '',
};

export default EmptyBlock;
