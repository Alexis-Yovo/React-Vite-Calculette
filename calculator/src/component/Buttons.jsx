import React from 'react';

const Buttons = ({ onAdd, onMultiply, onReset }) => {
  return (
    <div>
      <button onClick={onAdd}>+</button>
      <button onClick={onMultiply}>*</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Buttons;
