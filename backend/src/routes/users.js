/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express')

const router = express.Router()

const axios = require('axios')

const describeImage = require('../lib/image-description')

const downloadImage = require('../lib/download-image')

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
  const userToCreate = {
    name: req.body.name,
    age: req.body.age,
    profession: req.body.profession,
  }
  const createdUser = await User.create(userToCreate)
  res.send(createdUser)
})

async function createArtwork({ artworkName, fileName }) {
  const artwork = await Artwork.create({ artworkName })

  const picsumUrl = `https://picsum.photos/seed/${artwork._id}/300/300`

  const pictureRequest = await axios.get(picsumUrl)
  artwork.fileName = pictureRequest.request.path

  const imagePath = await downloadImage(picsumUrl, fileName)
  const description = await describeImage(imagePath)
  artwork.description = description.BestOutcome.Description

  return artwork.save()
}

router.get('/initialize', async (req, res) => {
  const mihri = new User({ name: 'mihri', age: 35, profession: 'collector', email: 'mihi@lalal.com' })
  await mihri.setPassword('test')
  await mihri.save()

  const sara = new User({ name: 'sara', age: 42, profession: 'artist', email: 'sara@lalal.com' })
  await sara.setPassword('test')
  await sara.save()

  const manolo = new User({ name: 'manolo', age: 52, profession: 'collector', email: 'mani@lalal.com' })
  await manolo.setPassword('test')
  await manolo.save()

  sara.bio = ' An international visual artist'
  sara.save()

  const illustrationArtwork = await createArtwork({ artworkName: 'My Bubbles', fileName: 'bubbles.jpg' })

  const carvingArtwork = await createArtwork({ artworkName: 'My Bodegon', fileName: 'bodegon.jpg' })

  /*  const illustrationArtwork = await Artwork.create({
    artworkName: 'My Bubbles',
    fileName: 'bubbles.jpg',
  })

    const carvingArtwork = await Artwork.create({
    artworkName: 'My Bodegon',
    fileName: 'bodegon.jpg',
  })
*/
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

  if (user) res.send(user)
  else res.sendStatus(404)
})

router.get('/:userId/json', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.send(user)
})

module.exports = router
