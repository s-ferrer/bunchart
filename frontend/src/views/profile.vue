<script>
export default {
  name: 'Profile',
  components: {},
  data() {
    return {
      logo: 'logo-bunchart',
      picProfile: 'profile-model',
    }
  },
}
</script>

<template lang="pug">
  #app
    .container
      .row
        .col-12.col-md-6.col-lg-4
          img(:src="require(`@/assets/${this.picProfile}.jpg`)" :alt="`This is the ${this.picProfile} profile image`")
        .col-12.col-md-6.col-lg-4
          p Sara Titirin
      .row
        .col-6
          .gallery



</template>

<style lang="scss" scoped>
.container {
  display: block;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  height: 100vh;
  margin-top: 3rem;
  padding-top: 3rem;
  padding: 3rem;

  border-radius: 0.3rem;
  border: 1px solid #05f2f2;

  img {
    width: 75%;
    height: 100%;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #05f2f2;
  }
  p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 5%;
    padding-top: 65%;
    color: #2c3e50;
    font-weight: 700;
    background-color: azure;
  }
}
</style>
