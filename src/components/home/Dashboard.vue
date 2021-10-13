<template>
  <div id="dashboard" class="flex flex-row justify-center">
    <div class="content-wrapper h-full h-24 w-104 flex flex-col">
      <div class="header-container h-24">
        <h2 class="pt-14 font-roboto-slab font-black text-white text-3xl">
          Alette.
        </h2>
      </div>
      <search id="search" class="h-8 w-full mt-24"/>
      <Trending id="trending" class="h-7/16 mt-20 w-96"/>
      <Explore id="explore" class="h-7/16 mt-24"/>
    </div>
  </div>
</template>

<script>
import Trending from "./Trending.vue";
import Explore from "./Explore.vue";
import Search from "./Search.vue";
export default {
  name: "Dashboard",
  components: {Search, Explore, Trending}
}
</script>

<style scoped>

</style>