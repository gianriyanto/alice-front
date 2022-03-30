<template>
  <span id="channel" class="flex flex-col w-12 h-5 pt-2 pb-2 justify-center border border-transparent cursor-pointer">
    <span class="font-nunito-sans font-bold text-slate400 tracking-tight text-sm m-auto">
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