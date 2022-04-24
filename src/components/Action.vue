<template>
  <span id="action" class="flex flex-col h-8 pl-3 pr-3 pt-2 pb-2 justify-center
                           border rounded-md
                           hover:bg-zinc200 duration-300 ease-in-out">
    <button class="font-nunito-sans font-bold tracking-tight text-sm m-auto">
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