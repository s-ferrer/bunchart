/* eslint-disable func-names */
const express = require('express')

const router = express.Router()

const users = [
  { name: 'sara', age: 42 },

  { name: 'manolo', age: 51 },
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

module.exports = router
