<script>
export default {
  name: 'AuctionSet',
  props: ['artwork'],
}
</script>

<template lang="pug">
  .box
    h1 {{ artwork.artworkName }} {{ artwork.filename }} {{ artwork.material }} {{ artwork.price }}

</template>

<style lang="scss" scoped>
.box {
  color: white;
  padding: 2rem;
  border: 1px solid rgb(36, 25, 190);
  background: rgb(81, 115, 209);
  border-radius: 0.3rem;
  text-align: center;
}
</style>
