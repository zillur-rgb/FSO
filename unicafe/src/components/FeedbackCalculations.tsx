import React from 'react';

export default function FeedbackCalculations({
  good,
  neutral,
  bad,
}: {
  good: number;
  neutral: number;
  bad: number;
}) {
  const total = good + bad + neutral;
  const average = total > 0 ? (good - bad) / total : 0;
  const positive = good > 0 ? good / total : 0;
  return (
    <>
      <p>Total Feedback: {total} </p>
      <p>average Feedback: {average} </p>
      <p>average positive Feedback: {positive} </p>
    </>
  );
}
