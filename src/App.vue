<template>
  <div>
    <div id="app-wrapper" class="bg-slate50 flex flex-row w-screen">
      <div class="flex flex-col">
        <side-bar id="side-bar" class="fixed top-0 h-screen flex-none w-24 z-20"/>
        <Home id="Home" class="h-screen z-10"/>
        <Explore id="Explore" class="h-screen z-10"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import Home from './views/Home.vue'
import Explore from "./views/Explore.vue";
import SideBar from "./components/SideBar.vue";

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh;
  width: 100vw;
}

</style>
