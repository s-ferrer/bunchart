<script>
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data() {
    return {
      logo: 'logo-bunchart',
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.login({
          email: this.email,
          password: this.password,
        })

        this.$router.push('/profile')
      } catch (e) {
        this.backendError = e.response.data.message
      }
    },
  },
}
</script>

<template lang="pug">
#app
    .container
      .row
        .col-12.col-md-12.col-lg-12
          .form
            form(@submit="submitLogin")
              h1 Log in to your account
              label(for="email") Email:&nbsp;
                  input(v-model="email" id="email" type="email" placeholder="Your email" required)
              label(for="password") Password:&nbsp;
                  input(v-model="password" id="password" type="password" placeholder="Your password" required)
              input(type="submit" value="Log in")
      .row
        .col-12.col-md-12.col-lg-12
          .register
              div(v-if="backendError") {{ backendError }}
              div Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss" scoped>
.container {
  color: #162c40;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 30px;
  align-content: center;
  text-align: center;
  .form {
    background-color: #05f2f2;
    border-radius: 2%;
    height: 50vh;
    width: 20rem;
    padding: 2rem;
    margin: auto;
    text-align: left;
  }
  label {
    display: block;
    margin: 2rem 0;
    width: 5.5rem;
    border-radius: 0.3rem;
    border-color: rgb(185, 182, 182);
    height: 1.5rem;
    margin-top: 1.5rem;
  }
}

.register {
  padding-top: 1%;
  color: #fc8208;
}
</style>
