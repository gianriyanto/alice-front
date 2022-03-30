<template>
  <span id="action" class="flex flex-col h-10 pl-3 pr-3 pt-2 pb-2 justify-center
                           border border-gray-200 rounded-md
                           hover:bg-zinc100 duration-300 ease-in-out">
    <button class="font-nunito-sans font-bold text-gray-600 tracking-tight text-sm m-auto">
      {{ actionType }}
    </button>
  </span>
</template>

<script>
export default {
  name: "Action",
  props: [
    "actionType"
  ]
}
</script>

<style scoped>

</style>