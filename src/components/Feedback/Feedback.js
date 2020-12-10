import React, { Component } from 'react';

import grades from './grades.json';
import s from './Feedback.module.css';

import Statistics from './Statistics';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  addRatingEvent = e => {
    //console.log(e.target.innerText);
    this.setState(prevState => ({
      [e.target.innerText]: prevState[e.target.innerText] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round(this.state.good / (this.countTotalFeedback() / 100));

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <b>Please leave feedback</b>
        <div className={s.buttons}>
          {grades.map(({ id, text }) => (
            <button key={id} onClick={this.addRatingEvent}>
              {text}
            </button>
          ))}
        </div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
