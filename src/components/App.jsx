import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { Component } from "react";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

    handleLeaveFeedback = ({ target: { name } }) => {
      this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  }
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }
  countPositiveFeedbackPercentage = (totalFeedback) => {
        if (totalFeedback > 0 ){return Math.round((this.state.good / totalFeedback) * 100)}
        return 0
    }
  render() {
    const options = Object.keys(this.state)
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedback);
    return(
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback > 0 ?
            (<Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />)
            : (<Notification message={"There is no feedback"}/>)
          }
        </Section>
      </>
    )
  }
};