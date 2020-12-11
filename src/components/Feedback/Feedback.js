import React, { Component } from 'react';

import Section from './Section';
import Statistics from './Statistics';
import Buttons from './Buttons';
import Notification from './Notification';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addRatingEvent = e => {
    this.setState(prevState => ({
      [e.target.innerText]: prevState[e.target.innerText] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    let result = null;
    result = Math.round(this.state.good / (this.countTotalFeedback() / 100));
    return result ? result : 0;
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <Buttons
            event={this.addRatingEvent}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              options={this.state}
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
