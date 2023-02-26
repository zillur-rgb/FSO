import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { useSelector } from "react-redux";
import AddNewForm from "./components/AnecdoteForm";
import SingleAnecdote from "./components/SingleAnecdote";

function App() {
  const anecdotes: any = useSelector((state) => state);
  const sortedAnecdotes = anecdotes.sort((a: any, b: any) => b.votes - a.votes);

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
            <SingleAnecdote anecdote={anecdote} />
          </div>
        )
      )}
      <h2>create new</h2>
      <AddNewForm />
    </div>
  );
}

export default App;
