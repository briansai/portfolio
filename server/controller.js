const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

// Set the region 
AWS.config.update({
  region: 'us-west-2'
});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'brian-portfolio',
};

// Call S3 to obtain a list of the objects in the bucket
app.get('/images', async (req, res) => {
  await s3.listObjects(bucketParams, (err, data) => {
    if (err) {
      throw new Error("Error", err);
    } else {
      res.type('png').json(data.Contents);
      res.end(data);
    }
  })
});

app.post('/email', (req,res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      type: 'OAuth2',
      user: 'briansai.portfolio@gmail.com',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  })
  const mailOptions = {
    from: email,
    to: 'brianwsai@gmail.com',
    subject,
    text: `Name: ${name} \nFrom: ${email} \nMessage: \n${message}`,
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) throw new Error(err);
    return res.json(info);
 });
})

app.listen(PORT, () => {
  console.log('Listening to port:', PORT);
});