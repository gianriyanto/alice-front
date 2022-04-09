<template>
  <body id="Explore" class="flex flex-row bg-slate-600">
    <filter-bar id="filter-bar" class="w-3/16 z-0"/>
    <feed id="feed" class="w-13/16 z-0"/>
    <button @click="tog()" class="absolute z-10 right-8 w-8 h-14 font-bold"> New </button>
    <div id="drawer" :class="open ? 'navbar-open' : 'navbar-close'"
         class="navbar absolute z-10 right-0 flex flex-col bg-slate100 h-screen w-5/16 border rounded shadow-xl">
      <button @click="tog()" class="h-12 w-12">
        <i class="ri-close-line" style="font-size: 28px; color: #323232"/>
      </button>
      <div v-if="drawerType==='createThread'">
        <create-thread id="create-thread" class="w-full overflow-x-scroll"/>
      </div>
    </div>
  </body>
</template>

<script>
import FilterBar from "../components/explore/FilterBar.vue";
import Feed from "../components/explore/Feed.vue";
import CreateThread from "../components/drawer/CreateThread.vue";
export default {
  name: "Explore",
  components: {CreateThread, Feed, FilterBar},
  data() {
    return {
      open: false,
      drawerType: "createThread"
    }
  },
  methods: {
    tog() {
      this.open = !this.open;
    }
  }
}
</script>

<style scoped>

.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(100%);
}

</style>