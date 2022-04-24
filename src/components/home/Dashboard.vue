<template>
  <div id="dashboard" class="flex flex-row justify-center">
    <div class="content-wrapper h-full h-24 pl-24 w-10/16 flex flex-col">
      <div class="header-container flex flex-col w-13/16">
        <div class="greeting-container flex flex-row mt-20">
          <h1 class="greeting mr-2 font-roboto-slab text-4xl font-black tracking-tight text-slate800"> Hey </h1>
          <img class="h-9 mr-2 mt-2" src="../../assets/emoji-wave.png" alt="wave-emoji"/>
          <h1 class="greeting mr-2 font-roboto-slab text-4xl font-extrabold tracking-tight text-slate800"> Edward! </h1>
        </div>
        <span class="message-container mt-2">
          <h2 class="font-roboto-slab font-semibold tracking-normal text-md text-slate600"> You have 2 recently answered questions </h2>
        </span>
      </div>
      <search id="search" class="h-8 w-full mt-12"/>
      <channels id="channels" class="h-7/16 w-14/16 mt-14 w-96"/>
      <Explore id="explore" class="h-7/16 mt-16"/>
    </div>
  </div>
</template>

<script>
import Explore from "./Explore.vue";
import Search from "./Search.vue";
import Channels from "./Channels.vue";
export default {
  name: "Dashboard",
  components: {Channels, Search, Explore}
}
</script>

<style scoped>

</style>