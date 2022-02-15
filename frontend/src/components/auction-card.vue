<script>
export default {
  name: 'AuctionCard',
  props: ['auction'],
}
</script>

<template lang="pug">
  .box
    .container
      button(@click="") Start bidding

    .container
      img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")

</template>

<style lang="scss" scoped>
.box {
  margin: 1%;
  padding: 0.7rem;
  // text-align: center;
}
.container {
  img {
    width: 350px;
    height: 350px;
    border-radius: 0.7rem;
  }
  h1 {
    color: #145da0;
  }
  button {
    border-radius: 0.7rem;
    padding: 0.7rem;
    margin: 10px;
    background-color: #2e8bc0;
    color: #b1d4e0;
  }
}
</style>
