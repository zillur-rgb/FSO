import { Key } from "react";
import { useSelector } from "react-redux";
import AddNewForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import SingleAnecdote from "./components/SingleAnecdote";
import { RootState } from "./redux/store";

function App() {
  const anecdotes = useSelector((state: RootState) => state.anecdotes);
  const noti = useSelector((state: RootState) => state.noti);

  console.log("Noti", noti);

  return (
    <div>
      {noti && <Notification label="You have voted" />}
      <h2>Anecdotes</h2>
      {anecdotes.map(
        (anecdote: { id: Key | null | undefined; content: string }) => (
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
