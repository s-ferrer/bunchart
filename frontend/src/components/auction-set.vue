<script>
export default {
  name: 'AuctionSet',
  props: ['auction'],
}
</script>

<template lang="pug">
  .box1
    .container1
      img(:src="require(`@/assets/${this.auction.showArtwork}.jpg`)" :alt="`This is the ${this.auction.showArtwork} image`")

</template>

<style lang="scss" scoped>
.box {
  color: white;
  padding: 2rem;
  border: 1px solid rgb(36, 25, 190);
  background-color: #162c40;
  border-radius: 0.3rem;
  text-align: center;
}
</style>
