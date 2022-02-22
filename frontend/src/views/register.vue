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
  .register
    .box
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
        div Already have an account? <router-link to="/login">Log in</router-link>
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem;
}
input {
  font-size: 16px;
  border: 1px double rgb(102, 97, 96);
  border-radius: 4px;
}
.register {
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
.box {
  background-color: #05f2f2;
  padding: 3rem;
  border-radius: 10%;
}
</style>
