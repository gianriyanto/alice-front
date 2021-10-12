<template>
  <div id="dashboard w-full" class="flex flex-row justify-center">
    <div class="content-wrapper h-full h-24 w-10/16 flex flex-col">
      <div class="header-container h-24">
        <h2 class="pt-14 font-roboto-slab font-black text-white text-3xl">
          Alice.
        </h2>
      </div>
      <div class="search-container flex flex-row h-10 w-full mt-24">
        <span class="cursor w-1 h-full bg-gray-300 opacity-40 mr-0.5"></span>
        <h2 class="self-center font-montserrat text-3xl font-normal tracking-tighter text-lightgrey">
          Search and you shall find
        </h2>
      </div>
      <Trending id="trending" class="h-7/16 mt-20"/>
      <Explore id="explore" class="h-7/16 mt-24"/>
    </div>
  </div>
</template>

<script>
import Trending from "./Trending.vue";
import Explore from "./Explore.vue";
export default {
  name: "Dashboard",
  components: {Explore, Trending}
}
</script>

<style scoped>

</style>