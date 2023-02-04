import { useState } from "react";
import PersonData from "./components/PersonData";
import PersonForm from "./components/PersonForm";

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


  return (
    <div style={{backgroundColor: "#333", color: "#eee", height:"100vh"}}>
      <h2>Phonebook</h2>
      <PersonForm newName={newName} setNewName={setNewName} onSubmit={onSubmit} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <PersonData persons={persons}/>
      typing {newName}
    </div>
  );
};

export default App;
