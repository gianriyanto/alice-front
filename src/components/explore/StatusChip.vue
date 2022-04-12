<template>
  <span class="status-chip flex h-10 pl-3 pr-3 mt-3 rounded-md border border-gray-200
               hover:opacity-50 duration-200 ease-in-out cursor-pointer">
    <span class="font-nunito-sans font-bold tracking-normal text-xs text-gray-500 m-auto">
      {{ label }}
    </span>
  </span>
</template>

<script>
export default {
  name: "StatusChip",
  props: [
    "label"
  ]
}
</script>

<style scoped>

</style>