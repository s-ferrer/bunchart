<script>
import AuctionCard from '@/components/auction-card.vue'
import BiddingButton from '@/components/bidding-button.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Auctions',
  components: { AuctionCard, BiddingButton },
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
  .home
    h1 Start the Auction!
    p {{ time }}


    .box
      BiddingButton
      AuctionCard(v-for="auction in auctions" :auction="auction")




</template>

<style lang="scss" scoped>
.home {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
  text-align: center;
  height: 1800px;
}

p {
  font-size: 0.7rem;
}
.container1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 150px;
    height: 150px;
    margin: auto;
  }
}

button {
  border-radius: 0.7rem;
  padding: 10px 2px;
  margin: 10px;
  background-color: #fc8208;
}

div {
  background-color: #162c40;
  color: #d94e5a;
}

.box {
  background-color: #162c40;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #05f2f2;

  h1 {
    color: #d94e5a;
    margin-bottom: 3rem;
  }
}
</style>
