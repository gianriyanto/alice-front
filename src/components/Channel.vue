<template>
  <span id="channel" class="flex flex-col w-12 pt-1 justify-center border border-transparent cursor-pointer">
    <span class="font-nunito-sans font-semibold text-gray-400 tracking-normal text-sm m-auto">
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