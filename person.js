class Person {
  constructor(name, age, profession) {
    this.name = name
    this.age = age
    this.bio = ''
    this.profession = profession
    this.artworks = []
    this.likes = []
    this.auctions = []
  }

  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  addArt(artworkId) {
    this.artworks.push(artworkId)
  }

  likeArt(artworkId) {
    this.likes.push(artworkId)
    artworkId.likedBy.push(this)
  }

  bid(artAuction) {
    this.auctions.push(artAuction)
  }

  get profile() {
    return `
        # ${this.name} (${this.age})
        Bio: ${this.bio}

        ## Works (${this.artworks.length})

        ${this.artworks
          .map(artworkId => {
            return ` ### ${artworkId.filename}
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
