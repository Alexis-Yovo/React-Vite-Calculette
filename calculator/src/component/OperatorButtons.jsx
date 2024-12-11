import PropTypes from 'prop-types';
import '../style/Operator.css';

const OperatorButtons = ({ onOperatorClick }) => {
  const operators = ['+', '-', 'x', '÷', '=', 'reset'];

  return (
    <div className="operator-buttons">
      {operators.map((operator) => (
        <button key={operator} onClick={() => onOperatorClick(operator)}>
          {operator}
        </button>
      ))}
    </div>
  );
};

OperatorButtons.propTypes = {
  onOperatorClick: PropTypes.func.isRequired,
};

export default OperatorButtons;
