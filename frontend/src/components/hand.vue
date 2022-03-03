<script>
export default {
  name: 'Hand',
  data: () => {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count + 20
    },
  },
}
</script>

<template lang="pug">
#app
    .container
      .row
        .col-4
          button(v-on:click.prevent='increment') +


</template>

<style lang="scss" scoped>
button {
  background: greenyellow;
  color: #162c40;
  margin-top: 30%;
  padding: 0.5rem;
  border: solid 1px #162c40;
  border-radius: 30%;
  text-decoration: none;
}
.message {
  padding-bottom: 20px;
  font-weight: bold;
  color: greenyellow;
}
</style>
