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
        .col-6
          img(:src="require(`@/assets/${this.picProfile}.jpg`)" :alt="`This is the ${this.picProfile} profile image`")
        .col-6
          p Sara Ferrer
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
  height: 500px;
  padding-top: 2rem;
  border-radius: 0.3rem;
  border: 1px solid #05f2f2;

  img {
    width: 100%;
    height: 100%;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #05f2f2;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 50%;
    padding-top: 10%;
    color: #05f2f2;
  }
}
</style>
