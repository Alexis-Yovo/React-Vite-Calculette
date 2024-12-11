import React from 'react';

const Inputs = ({ a, b, onSetA, onSetB }) => {
  return (
    <div>
      <input type="number" value={a} onChange={(e) => onSetA(e.target.value)} placeholder="a" />
      <input type="number" value={b} onChange={(e) => onSetB(e.target.value)} placeholder="b" />
    </div>
  );
};

export default Inputs;
