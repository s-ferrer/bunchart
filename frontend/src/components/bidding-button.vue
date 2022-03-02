<script>
export default {
  name: 'BiddingButton',
  props: [''],
}
</script>

<template lang="pug">
        a(@click="" href="/bid") Bid now!
</template>

<style lang="scss" scoped>
a {
  background: greenyellow;
  color: #162c40;
  padding: 0.7rem;
  border: solid 1px #162c40;
  border-radius: 50%;
  text-decoration: none;
}
</style>
