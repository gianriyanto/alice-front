<template>
  <body id="Home" class="flex flex-row">
    <div class="flex flex-row flex-grow">
      <dashboard id="dashboard" class="w-10/16 h-full"/>
      <side-panel id="side-panel" class="w-6/16 h-full flex-none"/>
    </div>
  </body>
</template>


<script>
import SidePanel from "../components/home/SidePanel.vue";
import SideBar from "../components/SideBar.vue";
import Dashboard from "../components/home/Dashboard.vue";

export default {
  name: "Home",
  components: {SideBar, SidePanel, Dashboard}
}
</script>

<style scoped>

</style>