<template>
  <button id="channel-button"
        class="flex bg-slate200 opacity-80 h-12 w-12 mt-4 rounded-lg hover:opacity-60 duration-300 ease-in-out cursor-pointer">
    <span class="font-nunito-sans font-extrabold tracking-normal text-md text-slate400 m-auto">
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
      if ((name != "...") || (name != "+")) {
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