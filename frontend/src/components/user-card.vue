<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      logo: 'logo-bunchart',
      picProfile: 'profile-model',
    }
  },
}
</script>

<template lang="pug">
  .box
    img(:src="require(`@/assets/${this.picProfile}.jpg`)" :alt="`This is the ${this.picProfile} profile image`")
    h1 {{ user.name }}
    h3 {{ user.profession }}
    p Bio: {{ user.bio || 'This user has not bio yet.' }}
    h3 Artworks ({{ user.artworksList.length }})

    .artwork(v-for="artwork in user.artworksList")
        img(:src="`https://picsum.photos${artwork.fileName}`" :alt="artwork.description" :title="artwork.description")
        p(v-if="!artwork.likedBy.length")
          | no likes yet!
        p(v-else)
          | {{ artwork.likedBy.map(user => user.name).join(', ') }}
    .profile-card
      button.btn.btn-primary connect

</template>

<style lang="scss" scoped>
.box {
  color: white;
  padding: 2rem;
  border: 1px solid #05f2f2;
  border-radius: 0.3rem;
  // text-align: center;
  img {
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 50%;
    border: 1px solid #05f2f2;
  }
  h1 {
    font-size: 2rem;
    color: #fc8208;
  }
  h3 {
    font-size: 1rem;
    color: #fff;
  }
}
img {
  width: 350px;
  height: 350px;
  margin: auto;
}
</style>
