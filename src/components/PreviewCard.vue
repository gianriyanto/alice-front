<template>
  <div id="preview-card" class="h-32 w-full rounded-xl pt-2 pl-4 pr-4 pb-4 hover:shadow-lg">
    <div class="card-wrapper h-full flex flex-col justify-around">
      <div class="header h-4/16 flex flex-row justify-between items-center">
        <span class="title font-montserrat font-semibold tracking-tighter text-md">
          {{ title }}
        </span>
        <span class="timestamp font-montserrat font-light tracking-tighter text-xs ">
          {{ createdTimestamp }}
        </span>
      </div>
      <div class="card-body flex flex-row h-12/16 mt-1">
        <span class="indent-bar h-full w-2 mr-3 rounded-md bg-green-400 opacity-50"/>
        <span class="body-content font-nunito-sans font-light tracking-tighter text-gray-400">
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