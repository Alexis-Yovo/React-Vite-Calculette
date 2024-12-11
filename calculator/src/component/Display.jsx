
import PropTypes from 'prop-types';
import '../style/Display.css';

const Display = ({ input }) => {
  return <div className="display">{input}</div>;
};

Display.propTypes = {
  input: PropTypes.string.isRequired,
};

export default Display;