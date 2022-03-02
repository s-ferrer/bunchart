<script>
import AuctionCard from '@/components/auction-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Bid',
  components: { AuctionCard },
  data() {
    return {
      logo: 'logo-bunchart',
      auctions: [{ category: 'digital' }],
      bidders: [],
      time: new Date(),
    }
  },
  methods: {
    ...mapActions(['goLive']),
  },
}
</script>

<template lang="pug">

  body
    .container
      .row
        .col-12 col-med-6
          .time
            p {{ time }}
        .col-12
          .bidders
            p N° Bidders:
      .row
        .col-sm-12
          .card
            AuctionCard(v-for="auction in auctions" :auction="auction" )
      .row
        .col-4
          .openPrice
            p 1300 €
        .col-4
          .hand
            p BID
        .col-4
          .finalPrice
            p 1500 €

</template>

<style lang="scss" scoped>
.container {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
  text-align: center;
  height: 800px;
  h1 {
    font-size: 2rem;
    color: #fc8208;
  }
  p {
    font-size: 0.7rem;
    color: #05f2f2;
  }
}

button {
  border-radius: 0.7rem;
  padding: 10px 2px;
  margin: 10px;
  background-color: #fc8208;
}
</style>
