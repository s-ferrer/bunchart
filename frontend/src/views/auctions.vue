<script>
import BiddingCard from '@/components/bidding-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Auctions',
  components: { BiddingCard },
  data() {
    return {
      logo: 'logo-bunchart',
      auctions: [
        { category: 'digital' },
        { category: 'painting' },
        { category: 'sculpture' },
        { category: 'collage' },
        { category: 'photography' },
        { category: 'installation' },
      ],
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
 #app
    .container
      .row
        .col-12.col-md-12.col-lg-12
          .call
            h1 Start the Auction!
            p {{ time }}
      .row
        .col-12.col-md-6.col-lg-4(v-for="auction in auctions")
          .showAuctions
            BiddingCard(:auction="auction")


</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5% 0% 5% 0%;
  width: 100%;
  align-content: center;
  text-align: center;
  height: 100vh;
}
.call {
  margin: auto;
  color: #b0d4dd;
  font-size: 0.8rem;
}
h1 {
  color: #e98121;
  margin-bottom: 0.3rem;
  font-size: 2rem;
}
.showAuctions {
  display: flex;
  height: auto;

  width: 90%;
  border-radius: 10px;
  border: solid 1px #05f2f2;
  padding-bottom: 1rem;
  margin-bottom: 20px;
}
</style>
