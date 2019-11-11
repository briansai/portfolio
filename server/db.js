const MongoClient = require('mongodb').MongoClient;

const mongoWrapper = data => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) throw new Error(err);

    addEmail(data, client);
    client.close();
  })
}

const addEmail = (data, client) => {
  const dbName = 'portfolio';
  const db = client.db(dbName);  
  const emails = db.collection('emails');

  emails.One(data, (err, result) => {
    if (err) throw new Error(err);
    return result;
  })
}

module.exports = { mongoWrapper };
