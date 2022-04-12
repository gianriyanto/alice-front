<template>
  <span id="channel" class="flex flex-col w-12 h-5 pt-1 justify-center border border-transparent cursor-pointer">
    <span class="font-nunito-sans font-bold text-gray-400 tracking-tight text-sm m-auto">
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