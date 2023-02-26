import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseVote } from "./actions/increaseVote";

function App() {
  const anecdotes: any = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id: any) => {
    dispatch(increaseVote(id));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(
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
      <form>
        <div>
          <input />
        </div>
        <button>create</button>
      </form>
    </div>
  );
}

export default App;
