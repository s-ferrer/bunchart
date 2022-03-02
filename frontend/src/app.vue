<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      logo: 'logo-bunchart',
    }
  },
}
</script>

<template lang="pug">
  #app
    #nav
      .container
        img.logo(:src="require(`@/assets/${this.logo}.png`)" :alt="`This is the ${this.logo} logo image`")
      .boxNav
        router-link(to="/*") Home
      .boxNav(v-if='user')
        router-link(to="/community") Community
      .boxNav(v-if='user')
        router-link(to="/profile") Profile
      .boxNav(v-if='!user')
        router-link(to="/login") Login
      .boxNav(v-if='!user')
        router-link(to="/register") Register
      .boxNav(v-if='user')
        router-link(to="/auctions") Auctions
      .boxNav(v-if='user')
        a(@click="doLogout" href="#") Logout
      router-view

</template>

<style lang="scss">
@import '@/assets/theme.scss';
@import 'bootstrap/scss/bootstrap.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

#nav {
  padding: 30px;
  background-color: #2c3e50;

  .container {
    .logo {
      width: 150px;
      height: 150px;
    }
  }
  .boxNav {
    display: inline-flex;
    vertical-align: top;
    margin-top: 0.5rem;
    text-align: center;
    padding: 1rem;
    a {
      font-weight: bold;
      text-decoration: none;
      color: rgb(122, 204, 236);
      &.router-link-exact-active {
        color: #fc8208;
      }
    }
  }
}
</style>
