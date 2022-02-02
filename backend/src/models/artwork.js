const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const artworkSchema = new mongoose.Schema({
  artworkName: String,
  fileName: {
    type: String,
    requiered: true,
  },
  material: String,
  year: Number,
  price: Number,
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})

artworkSchema.plugin(autopopulate)
module.exports = mongoose.model('Artwork', artworkSchema)