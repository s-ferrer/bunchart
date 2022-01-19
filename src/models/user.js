const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  artworksList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artwork',
      autopopulate: true,
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artwork',
    },
  ],
})

class User {
  async addArt(artworkName) {
    this.artworksList.push(artworkName)
    await this.save()
  }

  async likeArt(artworkName) {
    this.likes.push(artworkName)
    artworkName.likedBy.push(this)

    await artworkName.save()
    await this.save()
  }

  async joinAuction(artAuction) {
    this.auctions.push(artAuction)
    await this.save()
  }
}
/*  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}

## Works (${this.artworksList.length})

${this.artworksList
  .map(artworkName => {
    return `### ${artworkName.fileId}
  ${artworkName.likedBy.map(user => user.name).join(', ')}
  `
  })
  .join('\n')}
  `
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You cant override it.`)
  }
}
*/

userSchema.loadClass(User)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
