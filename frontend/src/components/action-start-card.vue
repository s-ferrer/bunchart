<script>
import AuctionCard from '@/components/auction-card.vue'
export default {
  name: 'Action',
  props: ['auction'],
  components: { AuctionCard },
  data() {
    return {
      auctions: [{ category: 'digital' }],
    }
  },
}
</script>

<template lang="pug">
body
    .container
      .row
        .col-12.col-md-6.col-lg-4
          .bidders
            p N° Bidders:
      .row
         .col-12.col-md-12.col-lg-12(v-for="auction in auctions")
          .showAuctions
                AuctionCard(:auction="auction")
      .row
        .price
          .col-6.col-md-6.col-lg-6
            p 1400 €
            p 4300 €


</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #2c3e50;
  border-radius: 10px;
  border: solid 1px #05f2f2;
  margin: auto;
  width: 350px;
}
.bidders {
  margin-top: 6px;
  background-color: aqua;
  font-weight: 700;
}
.price {
  margin-top: 10%;
  color: aqua;
}
</style>
