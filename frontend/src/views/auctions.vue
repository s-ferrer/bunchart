<script>
import BiddingCard from '@/components/bidding-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Auctions',
  components: { BiddingCard },
  data() {
    return {
      logo: 'logo-bunchart',
      auctions: [{ category: 'digital' }, { category: 'painting' }, { category: 'sculpture' }],
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
        .col-12
          .call
            h1 Start the Auction!
            p {{ time }}
      .row
        .col-12
          .showAuctions
            BiddingCard(v-for="auction in auctions" :auction="auction")


</template>

<style lang="scss" scoped>
.container {
  background-color: #2c3e50;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 5% 0% 5% 0%;
  width: 100%;
  align-content: center;
  text-align: center;
  height: auto;
}
.call {
  margin: auto;
  color: #b0d4dd;
  font-size: 1rem;
}
.showAuctions {
  display: block;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #05f2f2;
  padding-bottom: 3rem;
}
h1 {
  color: #d94e5a;
  margin-bottom: 1rem;
}
</style>
