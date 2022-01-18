class Auction {
  constructor(category) {
    this.category = category
    this.bidders = []
    this.presentedArtworks = []
  }

  showArtwork(personId, artworkName, startPrice) {
    this.presentedArtworks.push({
      personId,
      artworkName,
      startPrice,
      bids: [],
    })
  }

  startBid(personId, artworkName, offer) {
    const presentedArtwork = this.presentedArtworks.find(showArtwork => showArtwork.artworkName == artworkName)
    if (!presentedArtwork) throw new Error('Artwork not found')

    // Check if the offer is higher than the previous one

    presentedArtwork.bids.push({ personId, artworkName, offer })
  }
}

module.exports = Auction
