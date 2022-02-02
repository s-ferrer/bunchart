/* eslint-disable no-underscore-dangle */
/* eslint-disable func-names */
const express = require('express')

const Artwork = require('../models/artwork')

const router = express.Router()

/* POST create an artwork */
router.post('/', async (req, res) => {
  const artworkToCreate = {
    filename: req.body.filename,
  }
  const createdArtwork = await Artwork.create(artworkToCreate)
  res.send(createdArtwork)
})

/* GET users listing. */

// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  const query = {}

  if (req.query._id) {
    query.name = req.query._id
  }
  if (req.query.artworkName) {
    query.name = req.query.artworkName
  }
  res.send(await Artwork.find(query)).sendStatus(200)
})

module.exports = router
