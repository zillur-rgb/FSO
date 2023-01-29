import { useReducer } from 'react';
import FeedbackCount from './components/FeedbackCount';
import { FeedbackKind } from './reducer/actionTypes';
import { feedbackDispatch } from './reducer/feedbackDispatch';
import { feedbckReducer, initialState } from './reducer/feedbackReducer';

function App() {
  const [state, dispatch] = useReducer(feedbckReducer, initialState);

  console.log('State: ', state);

  return (
    <>
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
    </>
  );
}

export default App;
