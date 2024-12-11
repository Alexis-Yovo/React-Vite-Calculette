import PropTypes from 'prop-types';

const Inputs = ({ a, b, onSetA, onSetB }) => {
  const handleSetA = (value) => {
    const numberValue = value === '' ? '' : Number(value);
    onSetA(numberValue);
  };

  const handleSetB = (value) => {
    const numberValue = value === '' ? '' : Number(value);
    onSetB(numberValue);
  };

  return (
    <div>
      <input
        type="number"
        value={a}
        onChange={(e) => handleSetA(e.target.value)}
        placeholder="a"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => handleSetB(e.target.value)}
        placeholder="b"
      />
    </div>
  );
};

Inputs.propTypes = {
  a: PropTypes.string,
  b: PropTypes.string,
  onSetA: PropTypes.func.isRequired,
  onSetB: PropTypes.func.isRequired,
};

export default Inputs;
