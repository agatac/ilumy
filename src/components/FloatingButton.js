import React from 'react';

const styles = {
  position: 'absolute',
  right: '24px',
  bottom: '24px',
  backgroundColor: '#db4437',
  border: 'none',
  borderRadius: '50%',
  boxShadow: '0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.2)',
  width: '56px',
  height: '56px',
  padding: '16px',
};

const FloatingButton = () => {
  return (
    <div
      role="button"
      tabIndex="0"
      className="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      style={styles}
    >
      <i data-feather="plus" style={{ fontSize: '24px' }} />
    </div>
  );
};

export default FloatingButton;
