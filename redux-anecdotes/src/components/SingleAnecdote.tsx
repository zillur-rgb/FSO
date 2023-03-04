import { useDispatch } from "react-redux";
import { increaseVote } from "../redux/reducers/anecdotesReducer";
import { showHideNoti } from "../redux/reducers/notificationReducer";

const SingleAnecdote = (anecdote: any) => {
  const dispatch = useDispatch();
  const { anecdote: singleAnecdote } = anecdote;

  const vote = (id: any) => {
    dispatch(increaseVote(id));
    dispatch(showHideNoti());

    setTimeout(() => {
      dispatch(showHideNoti());
    }, 3000);
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
