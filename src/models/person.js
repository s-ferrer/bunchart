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

  addArt(artworkName) {
    this.artworksList.push(artworkName)
  }

  likeArt(artworkName) {
    this.likes.push(artworkName)
    artworkName.likedBy.push(this)
  }

  joinAuction(artAuction) {
    this.auctions.push(artAuction)
  }

  get profile() {
    return `
# ${this.name} (${this.age})
Bio: ${this.bio}

## Works (${this.artworksList.length})

${this.artworksList
  .map(artworkName => {
    return `### ${artworkName.fileId}
  ${artworkName.likedBy.map(person => person.name).join(', ')}
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
