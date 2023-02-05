import axios from "axios";
import { useEffect, useState } from "react";
import PersonData from "./components/PersonData";
import PersonForm from "./components/PersonForm";
import { createNew, deleteData, getAll, update } from "../src/utils/axios";
import Notifications from "./components/Notifications";

export type PhonebookType = {
  id: string;
  name: string;
  number: string;
}[];

const App = () => {
  const [persons, setPersons] = useState<PhonebookType>([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [notifications, setNotifications] = useState<string>("");

  console.log("Notification: ", notifications);

  useEffect(() => {
    // console.log("Start fetching");
    getAll().then((response) => {
      console.log("Fetching done");
      setPersons(persons.concat(response.data));
      // console.log("Persons: ", persons);
    });
  }, []);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const addName = {
      name: newName,
      number: newNumber,
    };
    const alreadyAdded = persons.find((person) => person.name === addName.name);

    alreadyAdded
      ? axios
          .put(
            `http://localhost:5000/api/phonebooks/${alreadyAdded.id}`,
            addName
          )
          .then((res) => {
            setPersons(
              persons.map((person) =>
                person.name !== addName.name ? person : res.data
              )
            );
            setNewName("");
            setNewNumber("");
          })
      : createNew(addName).then((response) => {
          console.log("Added: ", response.data);
          setPersons(persons.concat(response.data));
          setNotifications(`${addName.name} has been added to the list.`);
          setTimeout(() => setNotifications(""), 5000);
          setNewName("");
          setNewNumber("");
        });
  };

  const onClickDeleteData = (id: string) => {
    axios
      .delete(`http://localhost:5000/api/phonebooks/${id}`)
      .then(() => {
        console.log("id deleted");
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((err) => {
        setNotifications(`User has already been added to the list.`);
        setTimeout(() => setNotifications(""), 5000);
      });
  };

  return (
    <div style={{ backgroundColor: "#333", color: "#eee", height: "100vh" }}>
      <h2>Phonebook</h2>
      <PersonForm
        newName={newName}
        setNewName={setNewName}
        onSubmit={onSubmit}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <Notifications notifications={notifications} />
      <h2>Numbers</h2>
      <PersonData persons={persons} onClickDeleteData={onClickDeleteData} />
      typing {newName}
    </div>
  );
};

export default App;
