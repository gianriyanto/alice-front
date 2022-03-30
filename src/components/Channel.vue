<template>
  <span id="channel" class="flex flex-col w-12 h-5 pt-2 pb-2 justify-center border border-transparent">
    <span class="font-nunito-sans font-bold text-gray-400 tracking-wide text-xs m-auto">
      {{ channel }}
    </span>
  </span>
</template>

<script>
export default {
  name: "Channel",
  props: [
    "channel"
  ]
}
</script>

<style scoped>

</style>