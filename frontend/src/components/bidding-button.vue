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
  padding: 0.3rem;
  border: solid 1px #05f2f2;
  border-radius: 50%;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 4rem;
  height: 4rem;
  text-decoration: none;
}
</style>
