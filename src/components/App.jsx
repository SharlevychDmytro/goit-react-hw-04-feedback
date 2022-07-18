import { useState } from 'react';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateKeys = ['good', 'neutral', 'bad'];

  const incrementStat = e => {
    const currentBtn = e.currentTarget.textContent.toLowerCase();

    if (currentBtn === 'good') {
      setGood(good + 1);
    }
    if (currentBtn === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (currentBtn === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  };

  return (
    <Box bg="background" padding="20px">
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateKeys} onLeaveFeedback={incrementStat} />

        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Box>
  );
};
