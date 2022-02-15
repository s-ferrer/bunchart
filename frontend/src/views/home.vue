<script>
import AuctionCard from '@/components/auction-card.vue'

export default {
  name: 'Home',
  components: { AuctionCard },
  data() {
    return {
      logo: 'logo-bunchart-temp',
      auctions: [{ category: 'digital' }, { category: 'painting' }],
    }
  },
}
</script>

<template lang="pug">
  .home
    .container
      img(:src="require(`@/assets/${this.logo}.png`)" :alt="`This is the ${this.logo} logo image`")
    .container
      h1 Support your local artists!
    .box
      h1 Last auctions!
      AuctionCard(v-for="auction in auctions" :auction="auction")



</template>

<style lang="scss" scoped>
.home {
  background-color: rgb(3, 3, 3);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  h1 {
    background-color: rgb(0, 0, 0);
    margin: 3rem;
    color: #ffffff;
    width: 400px;
  }
  img {
    width: 350px;
    height: 350px;
    display: block;
    margin: auto;
  }
}
.box {
  background-color: #f0f4f7;
  padding: 2rem;
  border-radius: 10px;
}
</style>
