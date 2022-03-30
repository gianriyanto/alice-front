<template>
  <div id="preview-card" class="w-full h-24 rounded-lg mt-2 pl-5 pr-4 hover:shadow-sm cursor-pointer">
    <div class="card-wrapper h-full min-h-fit flex flex-col justify-center">
      <div class="header flex flex-row justify-between items-center">
        <span class="title font-nunito-sans font-bold tracking-tighter text-sm text-slate700">
          {{ title }}
        </span>
        <span class="timestamp font-nunito-sans font-light tracking-tighter text-xs">
          {{ createdTimestamp }}
        </span>
      </div>
      <div class="card-body flex flex-row w-13/16 pt-1">
        <span class="indent-bar w-2 h-full w-2 mr-3 bg-green-400 opacity-40"/>
        <span class="body-content font-nunito-sans font-light tracking-tighter text-sm text-zinc600">
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