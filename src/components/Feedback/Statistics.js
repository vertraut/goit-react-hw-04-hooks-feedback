import PropTypes from 'prop-types';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <div>
      {Object.keys(options).map(feedbackRate => (
        <p key={feedbackRate}>
          {feedbackRate}: {options[feedbackRate]}
        </p>
      ))}

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default Statistics;
