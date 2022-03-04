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
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(228, 205, 0);
  color: #162c40;
  padding: 0.5rem;
  border: solid 1px #05f2f2;
  border-radius: 150%;
  margin-top: 15%;
  width: 90%;
  height: 100%;
  text-decoration: none;
}
</style>
