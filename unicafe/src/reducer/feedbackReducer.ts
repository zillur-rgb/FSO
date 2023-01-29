import { FeedbackKind, FeedbackType } from './actionTypes';

type State = {
  good: number;
  bad: number;
  neutral: number;
};

export const initialState: State = {
  good: 0,
  bad: 0,
  neutral: 0,
};

export const feedbckReducer = (state: State, action: FeedbackType) => {
  switch (action.type) {
    case FeedbackKind.good:
      return {
        ...state,
        good: state.good + 1,
      };

    case FeedbackKind.bad:
      return {
        ...state,
        bad: state.bad + 1,
      };
    case FeedbackKind.neutral:
      return {
        ...state,
        neutral: state.neutral + 1,
      };

    default:
      return state;
  }
};
