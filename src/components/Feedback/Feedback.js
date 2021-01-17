import React, { useState } from 'react';

import grades from './grades.json';

import Section from './Section';
import Statistics from './Statistics';
import Buttons from './Buttons';
import Notification from './Notification';

function Feedback() {
  const [raiting, setRaiting] = useState(() =>
    grades.reduce(
      (options, grade) => ({
        ...options,
        [grade.text]: parseInt(grade.raiting),
      }),
      {},
    ),
  );

  const addRatingEvent = e => {
    setRaiting({
      ...raiting,
      [e.target.innerText]: raiting[e.target.innerText] + 1,
    });
  };

  const countTotalFeedback = () => {
    return Object.values(raiting).reduce((acc, value) => acc + value);
  };

  const countPositiveFeedbackPercentage = () => {
    let result = null;
    result = Math.round(raiting.good / (countTotalFeedback() / 100));
    return result ? result : 0;
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <Buttons event={addRatingEvent} options={Object.keys(raiting)} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() ? (
          <Statistics
            options={raiting}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification msg="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
