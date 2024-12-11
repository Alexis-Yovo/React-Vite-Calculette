import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onAdd, onMultiply, onReset }) => {
  return (
    <div>
      <button onClick={onAdd}>+</button>
      <button onClick={onMultiply}>*</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

Buttons.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onMultiply: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Buttons;