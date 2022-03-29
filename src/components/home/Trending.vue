<template>
  <div id="trending">
    <div class="trending-container flex-column">
      <h3 class="header h-2/16 font-nunito-sans text-xl font-bold tracking-tighter text-slate800">
        Trending
      </h3>
      <div class="trending-items h-14/16 mt-0 flex flex-wrap">
        <span class="item bg-slate300 opacity-60 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
        <span class="item bg-blue-200 opacity-60 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
        <span class="item bg-slate300 opacity-50 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
        <span class="item bg-blue-200 opacity-70 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
        <span class="item bg-indigo-200 opacity-50 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
        <span class="item bg-slate300 opacity-60 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
        <span class="item bg-pink-300 opacity-30 h-20 w-20 mr-3 mt-4 rounded-md hover:opacity-100 duration-300 ease-in-out"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Trending"
}
</script>

<style scoped>

</style>