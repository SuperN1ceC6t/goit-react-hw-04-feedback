import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

export const App = () =>  {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const {good, neutral, bad} = state

  const handleLeaveFeedback = ({ target: { name } }) => {
    setState(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  }
  const countTotalFeedback = () => {
        return good + neutral + bad
    }
  const countPositiveFeedbackPercentage = (totalFeedback) => {
        if (totalFeedback > 0 ){return Math.round((good / totalFeedback) * 100)}
        return 0
  }
    const options = Object.keys(state)
    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(totalFeedback);
    return(
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={handleLeaveFeedback} />
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
