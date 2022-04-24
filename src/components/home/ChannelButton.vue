<template>
  <button id="channel-button"
        class="flex flex-col bg-blue-300 bg-opacity-60 opacity-60 h-20 w-20 mr-3 mt-4 rounded-md
               hover:opacity-100 duration-300 ease-in-out cursor-pointer">
    <span class="font-nunito-sans font-extrabold tracking-normal text-xl text-blue-500 m-auto">
      {{ abbreviateChannel(channelName) }}
    </span>
  </button>
</template>

<script>
export default {
  name: "ChannelButton",
  props: [
    "channelName"
  ],
  methods: {
    abbreviateChannel(name) {
      if (name != "...") {
        const firstLetters = name.split('-').map(word => word[0]).join('');
        return firstLetters.toUpperCase()
      }
      else {
        return name
      }
    }
  }
}
</script>

<style scoped>

</style>