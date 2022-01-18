class Artwork {
  constructor(artworkName, fileId, material, year, price) {
    this.artworkName = artworkName
    this.fileId = Math.floor(Math.random() * 100) // generate id´s
    this.material = material
    this.year = year
    this.price = price
    this.likedBy = []
  }
}

module.exports = Artwork
