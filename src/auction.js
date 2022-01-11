class Auction {
  constructor(category) {
    this.category = category
    this.bidders = []
    this.presentedArtworks = []
  }

  presentArtwork(artworkId, startPrice) {
    this.presentedArtworks.push({
      artworkId,
      startPrice,
      bids: [],
    })
  }

  bid(personId, artworkId, offer) {
    const presentedArtwork = this.presentArtworks.find(pA => pA.artworkId == artworkId)
    if (!presentedArtwork) throw new Error('Artwork not found')

    // Check if the offer is higher than the previous one

    presentedArtwork.bids.push({ personId, offer })
  }
}

module.exports = Auction
