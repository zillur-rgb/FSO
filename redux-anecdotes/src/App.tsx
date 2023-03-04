import { Key, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNewForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";
import SingleAnecdote from "./components/SingleAnecdote";
import { setDotes } from "./redux/reducers/anecdotesReducer";
import { RootState } from "./redux/store";
import anecdotesServices from "./services/anecdotes";

function App() {
  const anecdotes = useSelector((state: RootState) => state.anecdotes);
  const noti = useSelector((state: RootState) => state.noti);
  const dispatch = useDispatch();

  useEffect(() => {
    anecdotesServices.getAll().then((dotes) => dispatch(setDotes(dotes)));
  }, [dispatch]);

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
