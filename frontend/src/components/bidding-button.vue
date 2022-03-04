<script>
export default {
  name: 'BiddingButton',
  props: [''],
}
</script>

<template lang="pug">
#app
    .container
      .row
        a(@click="" href="/bid") Bid now!
</template>

<style lang="scss" scoped>
a {
  background: rgb(228, 205, 0);
  color: #162c40;
  border: solid 1px #05f2f2;
  border-radius: 50%;
  padding: 10%;
  font-size: 0.7rem;
  text-decoration: none;
  line-height: 1em;
}
</style>
