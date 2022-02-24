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
    .container2
      img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")

</template>

<style lang="scss" scoped>
.box1 {
  margin: 1%;
  padding: 0.9rem;

  .container1 {
    p {
      color: #05dbf2;
      font-size: 2rem;
      padding: 3px;
      margin: 2px 40px 4px 40px;
    }
    button {
      border-radius: 0.7rem;
      padding: 0.7rem;
      margin: 20px;
      background-color: #2e8bc0;
      color: #ffffff;
      font-size: 1rem;
    }
  }
  .container2 {
    img {
      width: 350px;
      height: 350px;
      border-radius: 10px;
      border-style: solid;
      border-width: 1px;
      border-color: #05f2f2;
    }
  }
}
</style>
