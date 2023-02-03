import { useState } from "react";

export type PhonebookType = {
  name: string;
  number: string;
}[];

const App = () => {
  const [persons, setPersons] = useState<PhonebookType>([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  console.log("Persons:", persons);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const addName = {
      name: newName,
      number: newNumber,
    };
    const alreadyAdded = persons.find((person) => person.name === addName.name);
    alreadyAdded
      ? alert(`${addName.name} is already added`)
      : setPersons(persons.concat(addName));
    setNewName("");
    setNewNumber("");
  };

  console.log("newName: ", newName);

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={onSubmit}>
        <div>
          Name:{" "}
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          Number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, idx) => (
        <p key={idx}>
          {person.name} : {person.number}
        </p>
      ))}
      typing {newName}
    </>
  );
};

export default App;
