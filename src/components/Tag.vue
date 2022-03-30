<template>
  <div id="tag" class="flex flex-col h-7 pl-2 pr-2 justify-center bg-neutral200 opacity-60 rounded-md">
    <span class="font-nunito-sans font-semibold tracking-tight text-xs text-zinc700 m-auto">
      {{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: [
    "tag"
  ]
}
</script>

<style scoped>

</style>