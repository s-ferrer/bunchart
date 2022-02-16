<script>
export default {
  name: 'AuctionCard',
  props: ['auction'],
}
</script>

<template lang="pug">
  .box1
    .container1
      p {{ auction.category }}
      button(@click="") Start bidding
    .container2
      img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")

</template>

<style lang="scss" scoped>
.box1 {
  margin: 1%;
  padding: 0.7rem;
  // text-align: center;

  .container1 {
    p {
      background-color: orange;
      color: #162c40;
      font-size: 2rem;
      padding: 3px;
      margin: 2px 10px 4px 10px;
    }
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
}
</style>
