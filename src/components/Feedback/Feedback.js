import React, { Component } from 'react';

import grades from './grades.json';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  render() {
    return (
      <div>
        <b>Please leave feedback</b>
        <div className={s.buttons}>
          {grades.map(({ id, text }) => (
            <button key={id}>{text}</button>
          ))}
        </div>

        <h2>Statistics</h2>
        {Object.keys(this.state).map(feedbackRate => (
          <p key={feedbackRate}>
            {feedbackRate}: {this.state[feedbackRate]}
          </p>
        ))}
      </div>
    );
  }
}

export default Feedback;
