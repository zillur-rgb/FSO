import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseVote } from "./actions/increaseVote";
import AddNewForm from "./components/AddNewForm";

function App() {
  const anecdotes: any = useSelector((state) => state);
  const sortedAnecdotes = anecdotes.sort((a: any, b: any) => b.votes - a.votes);
  const dispatch = useDispatch();

  const vote = (id: any) => {
    dispatch(increaseVote(id));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(
        (anecdote: {
          id: Key | null | undefined;
          content:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          votes:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      )}
      <h2>create new</h2>
      <AddNewForm />
    </div>
  );
}

export default App;
