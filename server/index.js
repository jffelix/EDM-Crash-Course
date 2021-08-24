const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 4001;

const router = require('./routers/index.js');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/genreList`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

// app.get('/', function(req, res) {
//     res.send("Hello from server/index.js!");
// })


app.listen(port, () => {
    console.log(`App is listening from port ${port}!`);
})