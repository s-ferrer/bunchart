<script>
import AuctionSet from '@/components/auction-set.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Auction',
  components: { AuctionSet },
  data() {
    return {
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
  .home
    h1 Start the Auction!
    p The time is: {{ time }}

    button(@click="goLive") Go live
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
  color: #05f2f2;
  height: 600px;
}

button {
  border-radius: 0.7rem;
  padding: 10px 2px;
  margin: 10px;
  background-color: #05f2f2;
}
div {
  background-color: #162c40;
  color: #d94e5a;
}
</style>
