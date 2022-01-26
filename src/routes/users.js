/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express')

const router = express.Router()

const User = require('../models/user')

const Artwork = require('../models/artwork')

// const { findById } = require('../models/user')

/* GET users listing. */

// eslint-disable-next-line no-unused-vars
router.get('/', async (req, res, next) => {
  const query = {}

  if (req.query.name) {
    query.name = req.query.name
  }

  if (req.query.profession) {
    query.profession = req.query.profession
  }

  res.send(await User.find(query))
})

/* POST create a user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.send(createdUser)
})

router.get('/initialize', async (req, res) => {
  const mihri = await User.create({ name: 'mihri', age: 35, profession: 'collector' })
  const sara = await User.create({ name: 'sara', age: 42, profession: 'artist' })
  const manolo = await User.create({ name: 'manolo', age: 52, profession: 'collector' })
  sara.bio = ' An international visual artist'

  const illustrationArtwork = await Artwork.create({
    artworkName: 'My Bubbles',
    fileName: 'bubbles.jpg',
    material: 'Photo',
    year: 2019,
    price: 2300,
  })

  const carvingArtwork = await Artwork.create({
    artworkName: 'My Bodegon',
    fileName: 'bodegon.jpg',
    material: 'Painting',
    year: 2021,
    price: 3100,
  })

  await sara.addArt(illustrationArtwork)
  await sara.addArt(carvingArtwork)
  await mihri.likeArt(carvingArtwork)
  await manolo.likeArt(illustrationArtwork)

  res.sendStatus(200)
})

/* POST - User add an Artwork */
// eslint-disable-next-line no-unused-vars
router.post('/:userId/adds', async (req, res, next) => {
  const { userId } = req.params
  const { artworkId } = req.body
  if (!userId || !artworkId) {
    res.sendStatus(403)
    return
  }
  const user = await User.findById(userId)
  const artwork = await Artwork.findById(artworkId)
  console.log('letsseeartwork', req.body.artworkId)
  await user.addArt(artwork)

  res.sendStatus(200)
})

/* POST - User likes an Artwork */
router.post('/:userId/likes', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const artwork = await Artwork.findById(req.body.artworkId)

  await user.likeArt(artwork)
  res.sendStatus(200)
})

router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

module.exports = router
