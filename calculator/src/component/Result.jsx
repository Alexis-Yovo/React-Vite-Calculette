import React from 'react';

const Result = ({ result, error }) => {
  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && <div>Résultat: {result}</div>}
    </div>
  );
};

export default Result;
