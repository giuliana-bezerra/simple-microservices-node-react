const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/posts', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;
  const post = { id, title };
  posts[id] = post;
  await axios.post('http://blog-event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: post,
  });
  res.status(201).send(post);
});

app.post('/events', (req, res) => {
  console.log('Received Event:', req.body.type);
  res.send({});
});

app.listen(4000, () => {
  console.log('Minha mudança!');
  console.log('Listening on 4000...');
});
