'use strict';

// require brings libraries into server

const express = require('express');
require('dotenv').config();
const app = express();

// when someone comes, serve them the public files
app.use(express.static('./public'));
// /hello is a url path, app.get is an event listener
// when they go to /hello, it sends a request
// response.status gives the status of 200 which means things are good
// .send will send back 'Hello'
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
})

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }
  response.status(200).json(airplanes);
})

// activates home path
app.get('/', (request, response) => {
  response.status(200).redirect('index.html');
})

// activates all paths; this is a catch all for when you've 
// already tried all other paths.  If they don't work, this is where it will end up
app.use('*', (request, response) => {
  response.send('Sorry, that route does note exist');
})

// goes into .env, finds PORT value, processes that value

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

// app.listen(3000);