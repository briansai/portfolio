const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Set the region 
AWS.config.update({
  region: 'us-west-2'
});

// Create S3 service object
const s3 = new AWS.S3({aapiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'brian-portfolio',
};

// Call S3 to obtain a list of the objects in the bucket
app.get('/images', async (req, res) => {
  await s3.listObjects(bucketParams, async (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    res.type('png').json(data.Contents);
    res.end(data);
  }
})});

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('Listening to port:', PORT);
});