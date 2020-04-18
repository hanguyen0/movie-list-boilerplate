const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000 || process.env.PORT;
const db = require('../database');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

//endpoint /movies is the name of the database
app.get('/movies', (req, res) => {
  db.query('select * from movies', (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // console.log(data);
      res.send(data);
    }
  });
});

app.post('/movies', (req, res) => {
  let params = req.body.title;
  db.query('insert into movies(title) values (?)', params, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});