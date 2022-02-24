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
    .container1
        img(:src="require(`@/assets/${this.logo}.png`)" :alt="`This is the ${this.logo} logo image`")
    .container2
        img(:src="require(`@/assets/${this.picProfile}.jpg`)" :alt="`This is the ${this.picProfile} profile image`")
    .container3
</template>

<style lang="scss" scoped>
.home {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
  text-align: center;
}

.container1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 100px;
    height: 100px;
    margin: auto;
  }
}
.container2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  img {
    width: 250px;
    height: 250px;
    display: block;
    margin: 20px;
    border-radius: 10px;
    border-style: solid;
    border-width: 1px;
    border-color: #05f2f2;
  }
}
</style>
