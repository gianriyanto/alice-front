<template>
  <span class="channel-chip flex pt-0.5 pb-0.5 pl-3 pr-3 mt-2 rounded-md border border-gray-400
               hover:opacity-50 duration-200 ease-in-out cursor-pointer">
    <span class="font-nunito-sans font-bold tracking-normal text-xs text-gray-600 m-auto">
      {{ label }}
    </span>
  </span>
</template>

<script>
export default {
  name: "ChannelChip",
  props: [
    "label"
  ]
}
</script>

<style scoped>

</style>