const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const aws = require('aws-sdk');
// const config = require('../config.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// (async () => {
//   AWS.config.loadFromPath('../config.json');
// })
// app.get('images', (req, res) => {
//   const images = async () => {
//     aws.config.update({
      
//     })
//   }
// })

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('Listening to port:', PORT);
});