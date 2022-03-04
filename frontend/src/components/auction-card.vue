<script>
export default {
  name: 'AuctionCard',
  props: ['auction'],
}
</script>

<template lang="pug">
  #app
    .container
      .row
        .col-12
          .text
            p {{ auction.category }}
      .row
        .col-12
          img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")

</template>

<style lang="scss" scoped>
.container {
  // background-color: #162c40;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  height: auto;

  .text {
    display: flex;
    color: #05dbf2;
    justify-content: center;
    font-size: 1.7rem;
    padding-top: 10%;
  }

  img {
    border-radius: 10px;
    border: solid 1px #05f2f2;
    width: 15rem;
    height: 15rem;
  }
}
p {
  color: #05dbf2;
  font-size: 2rem;
  padding-top: 2px;
}
</style>
