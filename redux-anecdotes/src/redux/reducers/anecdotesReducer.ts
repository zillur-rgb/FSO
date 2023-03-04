import { createSlice } from "@reduxjs/toolkit";

// const anecdotesAtStart = [
//   "If it hurts, do it more often",
//   "Adding manpower to a late software project makes it later!",
//   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//   "Premature optimization is the root of all evil.",
//   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
// ];

// const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = (anecdote: any) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0,
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      // console.log("state now", JSON.parse(JSON.stringify(state)));
      // const newAnecdote = {
      //   id: getId(),
      //   content: action.payload,
      //   votes: 0,
      // };
      // state.push(newAnecdote);
      // console.log("state then", JSON.parse(JSON.stringify(state)));
    },
    increaseVote(state, action) {
      // const id = action.payload;
      // const exactAnecdote = state.find((s) => s.id === id);
      // console.log("action.payload", JSON.parse(JSON.stringify(exactAnecdote)));
      // const toChange = {
      //   id,
      //   content: exactAnecdote?.content,
      //   votes: exactAnecdote ? exactAnecdote.votes + 1 : 2,
      // };
      // console.log("to change", JSON.parse(JSON.stringify(toChange)));
      // return state.map((s) => (s.id !== id ? s : toChange));
    },

    setDotes(state, action) {
      console.log("to change", JSON.parse(JSON.stringify(state)));
      return action.payload;
    },
  },
});

export const { createAnecdote, increaseVote, setDotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;
