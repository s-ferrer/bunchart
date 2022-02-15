<script>
export default {
  name: 'AuctionCard',
  props: ['auction'],
}
</script>

<template lang="pug">
  .box
    .container1
      button(@click="") Start bidding
    .container2
      img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")
    .container3
      .centered Artwork
</template>

<style lang="scss" scoped>
.box {
  margin: 1%;
  padding: 0.7rem;
  // text-align: center;

  .container1 {
    button {
      border-radius: 0.7rem;
      padding: 0.7rem;
      margin: 10px;
      background-color: #2e8bc0;
      color: #ffffff;
      font-size: 1rem;
    }
  }
  .container2 {
    img {
      width: 350px;
      height: 350px;
      border-radius: 0.7rem;
    }
  }
  .container3 {
    .centered {
      background-color: aqua;
      position: absolute;
      top: 120%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(14, 13, 13);
      padding: 8rem;
    }
  }
}
</style>
