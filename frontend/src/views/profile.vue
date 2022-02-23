<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Profile',
  components: { Counter },
  data() {
    return {
      logo: 'logo-bunchart',
      users: [],
      time: new Date(),
      message: '',
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers', 'goLive', 'sendMessageToLiveStream', 'joinStream']),
    sendMessage(e) {
      e.preventDefault()
      this.sendMessageToLiveStream(this.message)
      this.message = ''
    },
  },
  computed: {
    ...mapState(['currentLiveStream', 'liveStreams', 'user', 'liveStreamMessages']),
  },
}
</script>

<template lang="pug">

  .home
    img(:src="require(`@/assets/${this.logo}.png`)" :alt="`This is the ${this.logo} logo image`")
    h2 Users
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
    div(v-if="liveStreams.length")
      h2 Live streams
      div(v-for="stream in liveStreams")
        p {{ stream }}
        button(@click="joinStream(stream)") Join stream
    button(@click="goLive") Contact
    div(v-if="currentLiveStream")
      h3 Live stream
      .messages
        .message(v-for="message in liveStreamMessages")
          p
            span {{ message.author }}:&nbsp;
            span {{ message.body }}
      form(@submit="sendMessage")
        input(type="text" v-model="message")
        input(type="submit" value="Send message")

</template>

<style lang="scss" scoped>
.home {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
  text-align: center;
}
img {
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
}

h2,
h3 {
  color: rgb(224, 100, 17);
}
button {
  padding: 10px;
  margin: 00.7rem;
}
</style>
