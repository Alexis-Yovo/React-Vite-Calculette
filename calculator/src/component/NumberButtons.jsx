import PropTypes from 'prop-types';
import '../style/NumberButtons.css';

const NumberButtons = ({ onNumberClick }) => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="number-buttons">
      {numbers.map((number) => (
        <button key={number} onClick={() => onNumberClick(number)}>
          {number}
        </button>
      ))}
    </div>
  );
};

NumberButtons.propTypes = {
  onNumberClick: PropTypes.func.isRequired,
};

export default NumberButtons;