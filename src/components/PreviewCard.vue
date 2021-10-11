<template>
  <div id="preview-card" class="h-36 w-full bg-white border border-gray-200 rounded-xl pt-3 pl-4 pr-4 pb-4 hover:shadow">
    <div class="card-wrapper h-full flex flex-col justify-around">
      <div class="header h-4/16 flex flex-row justify-between items-center">
        <span class="title font-montserrat font-bold tracking-tighter text-md text-gray-500">
          Lorem ipsum dolor sit amet
        </span>
        <span class="timestamp font-montserrat font-light tracking-tighter text-xs text-gray-500 ">
          Today
        </span>
      </div>
      <div class="card-body flex flex-row h-12/16 mt-1.5">
        <span class="indent-bar h-full w-2 mr-3 rounded-md bg-green-400 opacity-50"/>
        <span class="body-content font-nunito-sans font-light tracking-tighter text-gray-400">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum, officia cupidatat non.
        </span>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "previewCard"
}
</script>

<style scoped>

</style>