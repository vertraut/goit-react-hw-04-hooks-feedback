const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <div>
      <h2>Statistics</h2>
      {/* {Object.keys(props.state).map(feedbackRate => (
      <p key={feedbackRate}>
        {feedbackRate}: {props.state[feedbackRate]}
      </p>
    ))} */}
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
