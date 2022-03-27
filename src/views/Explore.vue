<template>
 <body id="Explore" class="h-screen w-screen flex flex-row bg-background">
    <filter-bar id="filter-bar" class="w-3/16"/>
    <feed id="feed" class=""/>
  </body>
</template>

<script>
import FilterBar from "../components/explore/FilterBar.vue";
import Feed from "../components/explore/Feed.vue";
export default {
  name: "Explore",
  components: {Feed, FilterBar}
}
</script>

<style scoped>

</style>