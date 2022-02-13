<script>
export default {
  name: 'Home',
}
</script>

<template lang="pug">
  .home
    .container
      img(src='../assets/logo-bunchart-temp.png' alt='logo' style='width:350px; height:350px;')
      h1 bunchart
      h2 Support your local artists!
    .box
        button(@click="goBidding") Start bidding!

</template>

<style lang="scss" scoped>
.home {
  background-color: rgb(3, 3, 3);
  padding: 1rem;
}

.container {
  h1 {
    background-color: rgb(0, 0, 0);
    margin: 3rem;
    color: rgb(114, 166, 224);
  }
  h2 {
    background-color: rgb(0, 0, 0);
    margin: 3rem;
    color: rgb(114, 166, 224);
  }
}
.box {
  background-color: rgb(24, 147, 230);
  padding: 4rem;
  border-radius: 25px;
  h3 {
    background-color: rgb(119, 101, 160);
    margin: 4rem;
  }
  button {
    background-color: rgb(0, 0, 0);
    color: aqua;
    padding: 1rem;
    border-radius: 25px;
  }
}
</style>
