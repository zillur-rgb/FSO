const generateId = () => Number((Math.random() * 1000000).toFixed(0));

export const increaseVote = (id: any) => {
  return {
    type: "INCREASE_VOTE",
    payload: {
      id,
    },
  };
};

export const addNew = (content: string) => {
  return {
    type: "ADD_NEW",
    payload: {
      id: generateId(),
      content,
      vote: 0,
    },
  };
};
