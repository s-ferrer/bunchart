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
        .col-8.col-md-8.col-md-8
            .text
                p {{ auction.category }}
        .col-4.col-md-4.col-md-4
            .button
                BiddingButton
      .row
        .col-12
          img(:src="require(`@/assets/${this.auction.category}.jpg`)" :alt="`This is the ${this.auction.category} image`")

</template>

<style lang="scss" scoped>
.container {
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
    padding-left: 35%;
    padding-top: 5%;
    align-items: flex-start;
  }
  .button {
    display: flex;
    align-items: flex-start;
    padding-top: 10%;
    padding: 10%;
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
