<script>
import AuctionCard from '@/components/auction-card.vue'

export default {
  name: 'Home',
  components: { AuctionCard },
  data() {
    return {
      auctions: [
        { category: 'digital' },
        { category: 'painting' },
        { category: 'sculpture' },
        { category: 'collage' },
        { category: 'photography' },
        { category: 'installation' },
      ],
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
      .row
        .col-12.col-md-6.col-lg-4(v-for="auction in auctions")
          .showAuctions
            AuctionCard(:auction="auction")

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
  height: 100vh;
}

h1 {
  margin-top: -3%;
  color: #e6964b;
  margin-bottom: 0.5rem;
}
h2 {
  margin-top: 3%;
  background-color: #e6964b;
}

.showAuctions {
  display: flex;
  margin: auto;
  height: auto;
  width: 100%;
  border-radius: 10px;
  border: solid 1px #05f2f2;
  padding-bottom: 1rem;
  margin-bottom: 20px;
}
</style>
