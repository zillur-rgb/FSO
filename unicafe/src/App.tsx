import { useReducer } from 'react';
import FeedbackCalculations from './components/FeedbackCalculations';
import FeedbackCount from './components/FeedbackCount';
import { FeedbackKind } from './reducer/actionTypes';
import { feedbackDispatch } from './reducer/feedbackDispatch';
import { feedbckReducer, initialState } from './reducer/feedbackReducer';

function App() {
  const [state, dispatch] = useReducer(feedbckReducer, initialState);

  console.log('State: ', state);

  return (
    <>
      <h1>Provide Feedback</h1>
      <div
        style={{
          display: 'grid',
          gap: '10px',
          gridTemplateColumns: 'repeat(3, 100px)',
        }}
      >
        <button
          style={{
            backgroundColor: 'green',
            color: '#fff',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(feedbackDispatch(FeedbackKind.good))}
        >
          Good
        </button>
        <button
          style={{
            backgroundColor: 'red',
            color: '#fff',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(feedbackDispatch(FeedbackKind.neutral))}
        >
          Neutral
        </button>
        <button
          style={{
            backgroundColor: 'yellow',
            color: '#000',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(feedbackDispatch(FeedbackKind.bad))}
        >
          Bad
        </button>
        <FeedbackCount total={state.good} type="Good" />
        <FeedbackCount total={state.neutral} type="Neutral" />
        <FeedbackCount total={state.bad} type="Bad" />
      </div>
      <h1>Statisctics</h1>
      {state.bad > 0 || state.good > 0 || state.neutral > 0 ? (
        <FeedbackCalculations
          good={state.good}
          neutral={state.neutral}
          bad={state.bad}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
}

export default App;
