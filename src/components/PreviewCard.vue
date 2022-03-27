<template>
  <div id="preview-card" class="w-full rounded-xl pl-6 pr-6 mt-2 hover:shadow-sm">
    <div class="card-wrapper h-32 min-h-fit pb-4 pt-4 min-h-fit flex flex-col justify-around">
      <div class="header h-4/16 flex flex-row justify-between items-center">
        <span class="title font-nunito-sans font-bold tracking-tighter text-md">
          {{ title }}
        </span>
        <span class="timestamp font-nunito-sans font-light tracking-tighter text-xs">
          {{ createdTimestamp }}
        </span>
      </div>
      <div class="card-body flex flex-row h-12/16 w-14/16">
        <span class="indent-bar h-full w-3 mr-3 bg-green-400 opacity-40"/>
        <span class="body-content font-nunito-sans font-light tracking-tighter text-sm">
          {{ body }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "previewCard",
  props: [
    "title", "body", "createdTimestamp"
  ]
}
</script>

<style scoped>

</style>