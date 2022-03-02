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
  .home
    .container2
      h1 Support your local artists!
    .box
      h1 Last auctions!
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
.container2 {
  h1 {
    margin: 3rem;
    color: #ffffff;
    width: 400px;
  }
}
.box {
  background-color: #162c40;
  padding: 2rem;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #05f2f2;

  h1 {
    color: #d94e5a;
    margin-bottom: 3rem;
  }
}
</style>
