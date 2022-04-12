<template>
  <body id="Explore" class="flex flex-row bg-slate-600 w-full h-screen">
    <filter-bar id="filter-bar" class="w-4/16 h-screen z-0 border border-red"/>
    <feed id="feed" class="z-0 pt-10 w-15/16"/>
    <span class="header-container pt-11">
      <button @click="tog()"
              class="absolute z-10 right-8 pl-8 pr-8 h-10 font-bold border
                     rounded-md bg-blue-500 hover:bg-opacity-90 duration-300 ease-in-out
                     font-nunito-sans font-bold tracking-normal text-sm text-zinc50">
        Create
      </button>
    </span>
    <div id="drawer" :class="open ? 'navbar-open' : 'navbar-close'"
         class="navbar absolute z-10 right-0 flex flex-row h-screen">
      <button @click="tog()" class="h-10 w-10 mt-4 mr-4 rounded-full bg-zinc100 shadow-md">
        <i class="ri-close-line" style="font-size: 26px; color: #323232"/>
      </button>
      <div v-if="drawerType==='createThread'">
        <create-thread id="create-thread" class="w-96 h-full overflow-x-scroll bg-neutral50 rounded shadow-xl border"/>
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