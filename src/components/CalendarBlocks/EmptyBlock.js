import React from 'react';

export default function EmptyBlock(key, classes) {
  return (
    <div key={key} className={classes}>{''}</div> // eslint-disable-line
  );
}
