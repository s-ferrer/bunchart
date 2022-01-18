/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express')

// 1 res.render uses pug files, returns html
// 2 res.send recibes and return .json to interact with the data
const router = express.Router()

const Auction = require('../models/auction')

/* GET auctions page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function (req, res, next) {
  res.render('auctions')
})

/* POST new auction. */
// eslint-disable-next-line no-unused-vars
router.post('/', function (req, res, next) {
  const { category } = req.body

  if (!category) {
    res
      .send({
        message: 'Missing Category.',
      })
      .status(400)
    return
  }

  const sculpAuction = new Auction(category)

  res.send(sculpAuction)
})

module.exports = router
