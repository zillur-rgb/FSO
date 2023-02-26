export const increaseVote = (id: any) => {
  return {
    type: "INCREASE_VOTE",
    payload: {
      id,
    },
  };
};
