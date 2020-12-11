const Statistics = props => {
  const { options, total, positivePercentage } = props;
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

export default Statistics;
