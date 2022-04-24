<template>
  <div id="channels">
    <div class="channel-container flex-column">
      <h3 class="header h-2/16 font-nunito-sans text-lg font-bold tracking-tighter text-slate800">
        Channels
      </h3>
      <div class="channel-items h-14/16 mt-0 flex flex-wrap">
        <div v-for="channel in channels.slice(0, 7)">
          <channel-button id="channel-button" :channelName="channel"/>
        </div>
        <channel-button id="channel-button" class="" channelName="..."/>
      </div>
    </div>
  </div>
</template>

<script>
import ChannelButton from "./ChannelButton.vue";
import axios from "axios";
export default {
  name: "Channels",
  components: {ChannelButton},
  data() {
    return {
      channels: []
    }
  },
  mounted() {
    this.getChannels()
  },
  methods: {
    getChannels() {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/channels`)
        .then((response) => {
          this.channels = response.data
        })
        .catch((error) => {
          console.log("Error fetching threads")
      })
    }
  }
}
</script>

<style scoped>

</style>