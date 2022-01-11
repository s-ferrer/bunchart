const colors = require('colors/safe')

class Person {
  constructor(name, age, profession) {
    this.name = name
    this.age = age
    this.profession = profession
    this.bio = ''
    this.artworksList = []
    this.likes = []
    this.auctions = []
  }

  greet(person) {
    // eslint-disable-next-line no-console
    console.log(`Hello ${colors.red(person.name)}, this is ${this.name}`)
  }

  addArt(artworkId) {
    this.artworksList.push(artworkId)
  }

  likeArt(artworkId) {
    this.likes.push(artworkId)
    artworkId.likedBy.push(this)
  }

  joinAuction(artAuction) {
    this.auctions.push(artAuction)
  }

  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}

## Works (${this.artworks.length})

${this.artworksList
  .map(artworkId => {
    return `### ${artworkId.filename}
  ${artworkId.likedBy.map(person => person.name).join(', ')}
  `
  })
  .join('\n')}
  `
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You cant override it.`)
  }
}

module.exports = Person
