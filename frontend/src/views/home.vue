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
    .container1
      img(:src="require(`@/assets/${this.logo}.png`)" :alt="`This is the ${this.logo} logo image`")
    .container2
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
  text-align: center;
}

.container1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 350px;
    height: 350px;
    display: block;
    margin: auto;
  }
}
.container2 {
  h1 {
    background-color: rgb(0, 0, 0);
    margin: 3rem;
    color: #ffffff;
    width: 400px;
  }
}
.box {
  background-color: #f0f4f7;
  padding: 2rem;
  border-radius: 10px;
}
</style>
