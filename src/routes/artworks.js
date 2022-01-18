/* eslint-disable func-names */
const express = require('express')

const Artwork = require('../models/artwork')

const router = express.Router()

/* POST add an artwork. */
// eslint-disable-next-line no-unused-vars
router.post('/', function (req, res, next) {
  const { fileId, material, year, price } = req.body

  if (!fileId || !material || !year || !price) {
    res
      .send({
        message: 'Missing fields.',
      })
      .status(400)
    return
  }

  const myArtwork = new Artwork(fileId, material, year, price)

  res.send(myArtwork)
})

module.exports = router
