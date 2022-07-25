import React from 'react';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';
import styles from './style.module.css';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  btnClick = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countFeedback = this.countTotalFeedback;
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onBtnClick={this.btnClick} />
        </Section>
        <Section title="Statistics">
          {countFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
