<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Community',
  components: { Counter },
  data() {
    return {
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
    h2 Community
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

head body template #app .header h1 Community .container .row .col-12.col-md-6.col-lg-4(v-for='user of users'
:key='user.name') matchcard(:match='match')

<style lang="scss" scoped>
.home {
  background-color: #162c40;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 50px;
  align-content: center;
  text-align: center;
  height: 600px;
  border-radius: 0.3rem;
  border: 1px solid #05f2f2;
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
  padding: 5px;
  margin: 0.7rem;
}
</style>
