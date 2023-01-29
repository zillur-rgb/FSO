export enum FeedbackKind {
  good = 'GOOD',
  bad = 'BAD',
  neutral = 'NEUTRAL',
}

export type FeedbackType = {
  type: FeedbackKind;
  payload?: any;
};
