<script>
export default {
  name: 'Hand',
  props: [''],
}
</script>

<template lang="pug">
        <button v-on:click="counter += 20">Add 1</button>
</template>

<style lang="scss" scoped>
a {
  background: greenyellow;
  color: #162c40;
  padding: 0.7rem;
  border: solid 1px #162c40;
  border-radius: 50%;
  text-decoration: none;
}
</style>
