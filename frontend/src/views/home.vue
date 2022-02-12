<script>
export default {
  name: 'Home',
}
</script>

<template lang="pug">
    .home
        img(src='../assets/logo-bunchart-temp.png' alt='logo' style='width:100px; height:100px;')
        h1 bunchart
        h2 Welcome
        .box
          h3 Support your local artists!
</template>

<style lang="scss" scoped>
.home {
  background-color: rgb(180, 180, 180);
  padding: 1rem;
  h1 {
    margin: 2rem;
  }
  h2 {
    margin: 3rem;
  }
}
.box {
  background-color: rgb(160, 101, 101);
  padding: 1rem;
  h3 {
    background-color: rgb(119, 101, 160);
    margin: 4rem;
  }
}
</style>
