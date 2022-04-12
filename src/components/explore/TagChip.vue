<template>
  <span class="tag-chip flex h-7 pl-3 pr-3 mt-3 rounded-md bg-gray-200
               hover:opacity-50 duration-200 ease-in-out cursor-pointer">
    <span class="font-nunito-sans font-bold tracking-normal text-xs text-gray-500 m-auto">
      {{ label }}
    </span>
  </span>
</template>

<script>
export default {
  name: "TagChip",
  props: [
    "label"
  ]
}
</script>

<style scoped>

</style>