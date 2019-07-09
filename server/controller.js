const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('Listening to port:', PORT);
});