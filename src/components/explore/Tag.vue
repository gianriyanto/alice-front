<template>
  <div id="tag" class="flex flex-col h-7 pl-2 pr-2 justify-center bg-gray-200 rounded-md opacity-50">
    <span class="font-nunito-sans font-semibold tracking-tight text-xs text-slate-900 m-auto">
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