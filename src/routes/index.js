/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express')

// 1 res.render uses pug files, returns html
// 2 res.send recibes and return .json to interact with the data
const router = express.Router()

// const Artwork = require('../models/artwork')

// const Auction = require('../models/auction')

// const Person = require('../models/person')

// const dena = new Person('Dena', 38, 'artist')

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function (req, res, next) {
  res.render('index', { title: 'bunchart' })
})

module.exports = router
