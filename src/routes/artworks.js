/* eslint-disable func-names */
const express = require('express')

const router = express.Router()
// GET /artworks
router.get('/', (req, res) => {
  res.send([])
})

module.exports = router
