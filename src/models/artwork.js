class Artwork {
  constructor(filename, material, year, price) {
    this.filename = filename
    this.material = material
    this.year = year
    this.price = price
    this.likedBy = []
  }
}

module.exports = Artwork
