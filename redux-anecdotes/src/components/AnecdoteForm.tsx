import { useDispatch } from "react-redux";
import { createDote } from "../redux/reducers/anecdotesReducer";
import DoteService from "../services/anecdotes";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addNewAnecdote = async (event: any) => {
    event.preventDefault();
    const content = event.target.title.value;
    const newNote = await DoteService.createNew(content);
    dispatch(createDote(newNote));
    event.target.title.value = "";
  };
  return (
    <>
      <h3>Add New Anecdote</h3>
      <form onSubmit={addNewAnecdote}>
        <input name="title" placeholder="Type your anecdote here" />
        <button>Add Now</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
