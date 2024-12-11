import PropTypes from 'prop-types';

const Result = ({ result, error }) => {
  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {result !== null && <div>Résultat: {result}</div>}
    </div>
  );
};

Result.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  error: PropTypes.string,
};

export default Result;