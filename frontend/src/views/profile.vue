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

  .home
    .container
          img(:src="require(`@/assets/${this.picProfile}.jpg`)" :alt="`This is the ${this.picProfile} profile image`")

</template>

<style lang="scss" scoped>
.home {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px;
  align-content: center;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 600px;

  img {
    width: 250px;
    height: 250px;
    display: block;
    padding: 1px;
    border-radius: 20px;
    border: 1.5px solid #05f2f2;
  }
}
</style>
