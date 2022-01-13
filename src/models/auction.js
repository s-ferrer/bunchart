class Auction {
  constructor(category) {
    this.category = category
    this.bidders = []
    this.presentedArtworks = []
  }

  showArtwork(artworkId, startPrice) {
    this.presentedArtworks.push({
      artworkId,
      startPrice,
      bids: [],
    })
  }

  startBid(personId, artworkId, offer) {
    const presentedArtwork = this.presentedArtworks.find(showArtwork => showArtwork.artworkId == artworkId)
    if (!presentedArtwork) throw new Error('Artwork not found')

    // Check if the offer is higher than the previous one

    presentedArtwork.bids.push({ personId, offer })
  }
}

module.exports = Auction
