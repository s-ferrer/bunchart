<script>
import Action from '@/components/action-start-card.vue'
import AuctionCard from '@/components/auction-card.vue'
import Hand from '@/components/hand.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Bid',
  components: { AuctionCard, Action, Hand },
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
  #app
    .container
      .row
        .col-12.col-md-6.col-lg-4
          Action
        .col-12.col-md-6.col-lg-4
          Action
        .col-12.col-md-6.col-lg-4
          Action
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 5%;
  padding-bottom: 30px;
  width: 100%;
  align-content: center;
  text-align: center;
}
</style>
