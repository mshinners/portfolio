'use strict';
//I've thrown all this in here from the kilovolt lab. Ill work to refactor this into my own stuff, but this is in here as a type of roadmap for me to work with.
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const expressProxy = require('express-request-proxy');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://localhost:5432/';
const client = new pg.Client(conString);

client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/new', (request, response) => response.sendFile('new.html', {root: './public'}));
app.get('/admin', (request, response) => response.sendFile('admin.html', {root: './public'}));
app.get('/articles', (request, response) => {
  client.query(`
    SELECT * FROM articles
    INNER JOIN authors
      ON articles.author_id=authors.author_id;`
  )
  .then(result => response.send(result.rows))
  .catch(console.error);
});

app.get('/github/*', proxyGithub);

function proxyGithub(req, res) {
  (expressProxy({
    url: `https://api.github.com/${req.params[0]}`,
    headers: {
