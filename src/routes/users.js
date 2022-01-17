/* eslint-disable func-names */
const express = require('express')

const router = express.Router()

const Person = require('../models/person')

const users = [
  { name: 'sara', age: 42, profession: 'artist' },

  { name: 'manolo', age: 51, profession: 'collector' },

  { name: 'mihri', age: 35, profession: 'collector' },
]

/* GET users listing. */

// eslint-disable-next-line no-unused-vars
router.get('/', function (req, res, next) {
  let result = users

  if (req.query.name) {
    // eslint-disable-next-line no-unused-vars
    result = users.filter(user => user.name == req.query.name)
  }

  res.send(users)
})

// eslint-disable-next-line no-unused-vars
router.get('/:userId', function (req, res, next) {
  const user = users[req.params.userId]
  if (user) res.send(user)
  else res.sendStatus(404)
})

/* POST Create a user. */
// eslint-disable-next-line no-unused-vars
router.post('/', function (req, res, next) {
  const { name, age, profession } = req.body

  if (!profession || !name || !age) {
    res
      .send({
        message: 'Missing fields. Please try again.',
      })
      .status(400)
    return
  }

  const newUser = new Person(name, age, profession)

  res.send(newUser)
})

module.exports = router
