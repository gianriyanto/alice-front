<template>
  <span id="status" class="flex flex-col w-12 h-4 pt-2 pb-2 justify-center bg-green-200 rounded-xl opacity-50 border border-green-300">
    <span class="font-nunito-sans font-semibold tracking-tighter text-xs text-gray-800 m-auto">
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