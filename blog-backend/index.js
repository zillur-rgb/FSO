require('dotenv').config();
const express = require('express');
const app = express();
const Blog = require('./models/blogs');

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

app.get('/api/blogs', (request, response) => {
  const blogs = Blog.find({}).then((res) => res.json());
  response.json(blogs);
});

/** Showing info */
app.get('/api/info', (req, res) => {
  const info = `<p>Phonebook has ${
    persons.length
  } entry <br> ${new Date()}</p>`;
  res.send(info);
});

/** Showing single phonebook info
 * @param id
 * @returns singlePerson
 *
 */
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const singlePerson = persons.find((p) => p.id === id);
  singlePerson ? res.json(singlePerson) : res.status(404);
});

/** Making post request */

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;

  return maxId + 1;
};

app.post('/api/persons', (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      error: 'content missing',
    });
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number,
  };

  const persons = persons.concat(person);
  res.json(persons);
});
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
