<template>
  <div id="dashboard" class="flex flex-row justify-center">
    <div class="content-wrapper h-full h-24 w-10/16 flex flex-col">
<!--      <div class="header-container h-24">-->
<!--        <h2 class="pt-14 font-roboto-slab font-black text-gray-800 text-3xl">-->
<!--          Alette.-->
<!--        </h2>-->
<!--      </div>-->
      <div class="header-container flex flex-col">
        <div class="greeting-container flex flex-row mt-28">
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-black tracking-tight text-lighterblue"> Hey </h1>
          <img class="h-9 w-9 mr-2" src="../../assets/emoji-wave.png" alt="wave-emoji"/>
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-extrabold tracking-tight text-lighterblue"> Edward! </h1>
        </div>
        <span class="message-container mt-2">
          <h2 class="font-roboto-slab font-semibold tracking-tight text-md text-gray-400"> You have 2 recently answered questions </h2>
        </span>
      </div>
      <Search id="Search" class="h-8 w-full mt-12"/>
      <Trending id="trending" class="h-7/16 mt-16 w-96"/>
      <Explore id="explore" class="h-7/16 mt-16"/>
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