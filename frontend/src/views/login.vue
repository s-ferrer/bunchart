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
.login
  .box
    form(@submit="submitLogin")
      h1 Log in to your account
      label(for="email") Email:&nbsp;
          input(v-model="email" id="email" type="email" placeholder="Your email" required)
      label(for="password") Password:&nbsp;
          input(v-model="password" id="password" type="password" placeholder="Your password" required)
      input(type="submit" value="Log in")

    div(v-if="backendError") {{ backendError }}
    div Don't have an account yet? <router-link to="/register">Register</router-link>
</template>

<style lang="scss" scoped>
.login {
  color: #162c40;
  background-color: #162c40;
  height: 500px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
  text-align: center;
}
label {
  display: block;
  margin: 1rem 0;
}
.box {
  background-color: #05f2f2;
  padding: 3rem;
  border-radius: 10%;
}
</style>
