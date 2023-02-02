require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const Blog = require('./models/blogs');
const Phonebook = require('./models/phonebooks');

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

/**
 * Posting phonebook data to backend
 */
app.post('/api/phonebooks', (req, res) => {
  const body = req.body;

  console.log('body', body);

  const phonebook = new Phonebook({
    name: body.name,
    number: body.number,
  });

  phonebook.save().then((savedNote) => {
    res.json(savedNote);
  });
});

/**
 * Getting all the phonebook info
 */
app.get('/api/phonebooks', (req, res) => {
  Phonebook.find({}).then((phonebooks) => {
    res.json(phonebooks);
  });
});

/**
 * Getting single blog
 * @param id
 * @returns
 */
app.get('/api/phonebooks/:id', (request, response) => {
  Phonebook.findById(request.params.id).then((contact) => {
    response.json(contact);
  });
});

/**
 * Getting all the blogs
 */
app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

/**
 * Posting new note
 */
app.post('/api/blogs', (req, res) => {
  const body = req.body;
  // console.log('BODY', body);

  const blog = new Blog({
    title: body.title,
    image: body.image,
    category: body.category,
    desc: body.desc,
    createdAt: new Date(),
  });

  blog.save().then((savedBlog) => {
    res.json(savedBlog);
  });
});

/** Showing single blog
 * @param id
 * @returns singleNlog
 */
app.get('/api/blogs/:id', (request, response) => {
  Blog.findById(request.params.id).then((blog) => {
    response.json(blog);
  });
});

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
