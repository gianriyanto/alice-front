<template>
  <span class="tag flex h-7 pt-0.5 pl-3 pr-3 mt-4 mr-2 rounded-md bg-blue-200 bg-opacity-50
               hover:opacity-50 duration-200 ease-in-out cursor-pointer">
    <span class="font-nunito-sans font-semibold tracking-normal text-sm text-blue-500 m-auto">
      {{ tagName }}
    </span>
  </span>
</template>

<script>
export default {
  name: "ExploreTagChip",
  props: [
    "tagName"
  ]
}
</script>

<style scoped>

</style>