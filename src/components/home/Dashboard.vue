<template>
  <div id="dashboard w-full" class="">
    <div class="content-wrapper h-full h-24 w-12/16 pl-20 flex-column">
      <div class="header-container h-24 border-white">
        <h2 class="pt-14 font-roboto-slab font-black text-white text-3xl"> Alice. </h2>
      </div>
      <div class="search-container flex h-16 w-full mt-24">
        <h2 class="self-center font-montserrat text-3xl font-medium tracking-tighter text-lightgrey">
          Search and you shall find
        </h2>
      </div>
      <div class="trending-container flex-column h-7/16 mt-16">
        <h3 class="header h-2/16 font-montserrat text-xl font-normal tracking-tighter text-white">
          Trending
        </h3>
        <div class="trending-items h-14/16 mt-2 flex flex-wrap">
          <span class="item bg-blue-500 opacity-70 h-24 w-24 mr-3 mt-4 rounded-md"/>
          <span class="item bg-blue-500 opacity-70 h-24 w-24 mr-3 mt-4 rounded-md"/>
          <span class="item bg-blue-400 opacity-70 h-24 w-24 mr-3 mt-4 rounded-md"/>
          <span class="item bg-blue-500 opacity-70 h-24 w-24 mr-3 mt-4 rounded-md"/>
          <span class="item bg-blue-500 opacity-70 blue h-24 w-24 mr-3 mt-4 rounded-md"/>
          <span class="item bg-blue-500 opacity-70 h-24 w-24 mr-3 mt-4 rounded-md"/>
          <span class="item bg-blue-500 opacity-70 h-24 w-24 mr-3 mt-4 rounded-md"/>
        </div>
      </div>
      <div class="explore-container flex-column h-7/16 mt-20">
        <h3 class="header h-2/16 font-montserrat text-xl font-normal tracking-tighter text-white">
          Explore
        </h3>
        <div class="explore-tags h-14/16 mt-2 flex flex-wrap">
          <span class="tag bg-blue-400 opacity-70 h-6 w-24 mr-2 mt-4 rounded-md"/>
          <span class="tag bg-green-200 opacity-60 h-6 w-40 mr-2 mt-4 rounded-md"/>
          <span class="tag bg-indigo-400 opacity-80 h-6 w-32 mr-2 mt-4 rounded-md"/>
          <span class="tag bg-yellow-100 opacity-70 h-6 w-36 mr-2 mt-4 rounded-md"/>
          <span class="tag bg-blue-400 opacity-60 h-6 w-20 mr-2 mt-4 rounded-md"/>
          <span class="tag bg-pink-300 opacity-70 h-6 w-28 mr-2 mt-4 rounded-md"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard"
}
</script>

<style scoped>

</style>