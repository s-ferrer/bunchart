<script>
import BiddingButton from '@/components/bidding-button.vue'

export default {
  name: 'BiddingCard',
  props: ['auction'],
  components: { BiddingButton },
}
</script>

<template lang="pug">
  #app
    .container
      .row
        .col-6.col-md-6.col-md-6
            .text
                p {{ auction.category }}
        .col-6.col-md-6.col-md-6
            .button
                BiddingButton
      .row
        .col-12
          img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")

</template>

<style lang="scss" scoped>
.container {
  background-color: #162c40;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  padding: 0rem;
  width: 100%;
  height: auto;

  .text {
    display: flex;
    color: #05dbf2;
    font-size: 1.7rem;
    padding-left: 50%;
    padding-top: 18%;
    align-items: flex-start;
  }
  .button {
    padding-top: 5%;
    font-weight: 700;
  }
  img {
    border-radius: 10px;
    border: solid 1px #05f2f2;
    width: 15rem;
    height: 15rem;
  }
}
</style>
