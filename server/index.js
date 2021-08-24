const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/genreList', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(() => {
    console.log(`App is listening from port ${port}!`);
})