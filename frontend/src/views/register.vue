<script>
import { mapActions } from 'vuex'

export default {
  name: 'register',
  data() {
    return {
      name: '',
      age: null,
      email: '',
      password: '',
      backendError: null,
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitLogin(e) {
      e.preventDefault()

      try {
        await this.register({
          name: this.name,
          age: this.age,
          email: this.email,
          password: this.password,
        })

        this.$router.push('/login')
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
        .col-12
          .form
            form( @submit="submitLogin")
              h1 Create a new account
              label(for="name") Name:&nbsp;
                input(v-model="name" id="name" type="text" placeholder="Your name" required)
              label(for="age") Age:&nbsp;
                input(v-model="age" id="age" type="number" placeholder="Your age" required)
              label(for="email") Email:&nbsp;
                input(v-model="email" id="email" type="email" placeholder="Your email" required)
              label(for="password") Password:&nbsp;
                input(v-model="password" id="password" type="password" placeholder="Your password" required)
              input(type="submit" value="Register")
              div(v-if="backendError") {{ backendError }}
      .row
        .col-12
          .register
              div Already have an account?
              <router-link id="login" to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
.container {
  color: #162c40;
  height: 530px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 30px;
  align-content: center;
  text-align: center;

  label {
    display: block;
    margin: 1rem 0;
  }
}
.form {
  background-color: #05f2f2;
  border-radius: 2%;
  width: 100%;
  padding: 2%;
  padding-bottom: 10%;
}
.register {
  padding-top: 5%;
  color: #fc8208;
}
</style>
