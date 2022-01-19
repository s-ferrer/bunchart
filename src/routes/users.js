/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express')

const router = express.Router()

const User = require('../models/user')

const Artwork = require('../models/artwork')

/* GET users listing. */

// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.age) {
    query.age = req.query.age
  }

  res.send(await User.find(query))
})

router.get('/initialize', async (req, res) => {
  const mihri = await User.create({ name: 'mihri', age: 35, profession: 'collector' })
  const sara = await User.create({ name: 'sara', age: 42, profession: 'artist' })
  const manolo = await User.create({ name: 'manolo', age: 52, profession: 'collector' })
  sara.bio = ' An international visual artist'
  const illustrationArtwork = await Artwork.create({ artworkName: 'bubbles.jpg' })
  const carvingArtwork = await Artwork.create({ artworkName: 'bodegon.jpg' })

  await sara.addArt(illustrationArtwork)
  await sara.addArt(carvingArtwork)
  await mihri.likeArt(carvingArtwork)
  await manolo.likeArt(illustrationArtwork)

  console.log(manolo)
  res.sendStatus(200)
})

// eslint-disable-next-line no-unused-vars
router.get('/:userId', async (req, res, next) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

module.exports = router
