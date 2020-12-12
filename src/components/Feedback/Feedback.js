import React, { Component } from 'react';

import grades from './grades.json';

import Section from './Section';
import Statistics from './Statistics';
import Buttons from './Buttons';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    raiting: grades.reduce(
      (options, grade) => ({
        ...options,
        [grade.text]: parseInt(grade.raiting),
      }),
      {},
    ),
  };

  addRatingEvent = e => {
    this.setState(({ raiting }) => ({
      raiting: {
        ...raiting,
        [e.target.innerText]: raiting[e.target.innerText] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state.raiting).reduce(
      (acc, value) => acc + value,
    );
  };

  countPositiveFeedbackPercentage = () => {
    let result = null;
    result = Math.round(
      this.state.raiting.good / (this.countTotalFeedback() / 100),
    );
    return result ? result : 0;
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Buttons
            event={this.addRatingEvent}
            options={Object.keys(this.state.raiting)}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              options={this.state.raiting}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification msg="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
