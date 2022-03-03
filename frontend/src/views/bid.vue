<script>
import AuctionCard from '@/components/auction-card.vue'
import Hand from '@/components/hand.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Bid',
  components: { AuctionCard, Hand },
  data: () => {
    return {
      logo: 'logo-bunchart',
      auctions: [{ category: 'digital' }],
      bidders: [],
      time: new Date(),
      count: 0,
    }
  },
  methods: {
    ...mapActions(['goLive']),
  },
  increment() {
    this.count + 20
  },
}
</script>

<template lang="pug">

  body
    .container
      .row
        .col-12.col-md-6
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
            hand
        .col-4
          .finalPrice
            .message
              p {{ count }} €

</template>

<style lang="scss" scoped>
.container {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 30px;
  align-content: center;
  text-align: center;
  height: 700px;

  h1 {
    font-size: 2rem;
    color: #fc8208;
  }
  p {
    font-size: 0.7rem;
    color: #05f2f2;
  }
}
.card {
  background-color: #162c40;
  width: 15rem;
  height: 21rem;
}
</style>
