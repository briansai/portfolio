const db = require('./db.js');

module.exports = {
  create: data => db.mongoWrapper(data),
}