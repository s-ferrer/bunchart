<script>
import AuctionCard from '@/components/auction-card.vue'

export default {
  name: 'Home',
  components: { AuctionCard },
  data() {
    return {
      auctions: [{ category: 'digital' }, { category: 'painting' }, { category: 'sculpture' }],
    }
  },
}
</script>

<template lang="pug">
  #app
    .container
      .row
        .col-12
          .call
            h1 Support your local artists!
      .row
        .col-12
          .showAuctions
            h1 Last auctions!
            AuctionCard(v-for="auction in auctions" :auction="auction")

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
  color: #ffffff;
  font-size: 1rem;
}
.showAuctions {
  display: block;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #05f2f2;
  padding-bottom: 1rem;

  h1 {
    color: #d94e5a;
    margin-bottom: 0.1rem;
  }
}
</style>
