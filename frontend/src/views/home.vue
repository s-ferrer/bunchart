<script>
import AuctionCard from '@/components/auction-card.vue'

export default {
  name: 'Home',
  components: { AuctionCard },
  data() {
    return { logo: 'logo-bunchart-temp' }
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
      AuctionCard


</template>

<style lang="scss" scoped>
.home {
  background-color: rgb(3, 3, 3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
}

img {
  width: 350px;
  height: 350px;
}
.container {
  h1 {
    background-color: rgb(0, 0, 0);
    margin: 3rem;
    color: #d8dee2;
  }
}
.box {
  background-color: #f0f4f7;
  padding: 2rem;
  border-radius: 10px;
}
</style>
