const express = require('express');
const app = express();

let persons = [
  {
    id: 1,
    name: 'Arto Hellas',
    number: '040-123456',
  },
  {
    id: 2,
    name: 'Ada Lovelace',
    number: '39-44-5323523',
  },
  {
    id: 3,
    name: 'Dan Abramov',
    number: '12-43-234345',
  },
  {
    id: 4,
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/persons', (request, response) => {
  response.json(persons);
});

/** Shpwing info */
app.get('/api/info', (req, res) => {
  const info = `<p>Phonebook has ${
    persons.length
  } entry <br> ${new Date()}</p>`;
  res.send(info);
});

/** Showing single phonebook info */
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const singlePerson = persons.find((p) => p.id === id);
  singlePerson ? res.json(singlePerson) : res.status(404);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
