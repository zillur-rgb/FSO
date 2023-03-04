import { useDispatch } from "react-redux";
import { increaseVote } from "../redux/reducers/anecdotesReducer";

const SingleAnecdote = (anecdote: any) => {
  const dispatch = useDispatch();
  const { anecdote: singleAnecdote } = anecdote;

  const vote = (id: any) => {
    dispatch(increaseVote(id));
  };
  return (
    <>
      <div>{singleAnecdote?.content}</div>
      <div>
        has {singleAnecdote?.votes}
        <button onClick={() => vote(singleAnecdote?.id)}>vote</button>
      </div>
    </>
  );
};

export default SingleAnecdote;
