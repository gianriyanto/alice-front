<template>
  <div id="channels" class="flex flex-col">
    <div class="channel-items flex flex-col h-full">
<!--      <span class="item bg-slate200 opacity-80 h-12 w-12 mt-4 rounded-lg border border-slate300 hover:opacity-60 duration-300 ease-in-out cursor-pointer"/>-->
     <div v-for="channel in channels.slice(0, 4)">
        <channel-button id="channel-button" :channelName="channel"/>
     </div>
     <channel-button id="channel-button" class="bg-blue-100" channelName="+"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ChannelButton from "./ChannelButton.vue";

export default {
  name: "Channels.vue",
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