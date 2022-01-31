<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Counter',
  mounted() {
    this.incrementCount()
  },
  methods: {
    ...mapActions(['incrementCount']),
  },
  computed: {
    ...mapState(['count']),
  },
}
</script>
<template lang="pug">
div
    p Visitors: {{ count }}
</template>
