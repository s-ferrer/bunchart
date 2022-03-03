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
        .col-12.col-md-12.col-lg-12
              h2 Last auctions!
              .showAuctions
                AuctionCard(v-for="auction in auctions" :auction="auction")

</template>

<style lang="scss" scoped>
.container {
  background-color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5% 0% 5% 0%;
  width: 100%;
  align-content: center;
  text-align: center;
  height: auto;
}
.call {
  margin-top: auto;
  color: #ffffff;
  font-size: 1rem;
}
h1 {
  color: #e6964b;
  margin-bottom: 0.5rem;
}
h2 {
  color: #e98121;
  background-color: rgb(87, 81, 74);
}

.showAuctions {
  display: flex;
  background-color: #8a3d7d;
  margin: auto;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #05f2f2;
  padding-bottom: 1rem;
}
</style>
