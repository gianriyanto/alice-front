<template>
  <span id="react" class="flex flex-col w-11 h-6 pt-2 pb-2 justify-center bg-gray-200 opacity-80 rounded-xl">
    <span class="font-nunito-sans font-bold text-gray-600 tracking-wide text-xs m-auto">
      {{ reactionType }}
    </span>
  </span>

</template>

<script>
export default {
  name: "React",
  props: [
    "reactionType"
  ]
}
</script>

<style scoped>

</style>