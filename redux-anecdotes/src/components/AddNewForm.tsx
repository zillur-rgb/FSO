import { useDispatch } from "react-redux";
import { addNew } from "../actions/increaseVote";

const AddNewForm = () => {
  const dispatch = useDispatch();

  const addNewAnecdote = (event: any) => {
    event.preventDefault();
    const content = event.target.title.value;
    dispatch(addNew(content));
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

export default AddNewForm;
