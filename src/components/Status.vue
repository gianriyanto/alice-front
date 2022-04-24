<template>
  <span id="status" class="flex flex-col w-14 h-5 pt-2 pb-2 justify-center bg-green-100 opacity-70 rounded-xl border border-green-300">
    <span class="font-nunito-sans font-bold tracking-tighter text-xs text-green-600 m-auto">
      {{ status }}
    </span>
  </span>
</template>

<script>
export default {
  name: "Status",
  props: [
    "status"
  ],
  // TODO: set chip color based on status
}
</script>

<style scoped>

</style>