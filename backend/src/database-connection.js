/* eslint-disable no-console */
const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
let connectionString = process.env.MONGODB_CONNECTION_STRING

mongoose.set('debug', true)

if (!connectionString) {
  connectionString = `mongodb+srv://${username}:${password}@bunchart.w9ksy.mongodb.net/${dbName}?retryWrites=true&w=majority`
}

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(console.log)

module.exports = mongoose.connection
