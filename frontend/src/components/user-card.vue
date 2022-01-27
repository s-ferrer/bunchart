<script>
export default {
  name: 'UserCard',
  props: ['user'],
}
</script>

<template lang="pug">
  .box
    h1 {{ user.name }} ({{ user.age }}) {{ user.profession }}
    p Bio: {{ user.bio || 'This user has not bio yet.' }}
    h2 Artworks ({{ user.artworksList.length }})

    .artwork(v-for="artwork in user.artworksList")
        h3 {{ artwork.artworkName }}
        p(v-if="!artwork.likedBy.length")
          | no likes yet!
        p(v-else)
          | {{ artwork.likedBy.map(user => user.name).join(', ') }}

</template>

<style lang="scss" scoped>
.box {
  color: white;
  padding: 2rem;
  border: 1px solid rgb(36, 25, 190);
  background: rgb(81, 115, 209);
  border-radius: 0.3rem;
  // text-align: center;
}
</style>
