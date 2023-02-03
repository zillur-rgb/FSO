import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  console.log("Persons:", persons);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const addName = {
      name: newName,
    };

    setNewName("");
    setPersons(persons.concat(addName));
  };

  console.log("newName: ", newName);

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, idx) => (
        <p key={idx}>{person.name}</p>
      ))}
      typing {newName}
    </>
  );
};

export default App;
