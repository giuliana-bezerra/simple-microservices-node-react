const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post('http://blog-posts-clusterip-srv:4000/events', event);
  axios.post('http://blog-comments-srv:4001/events', event);
  axios.post('http://blog-query-srv:4002/events', event);
  axios.post('http://blog-moderation-srv:4003/events', event);
  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
