<template>
 <body id="Explore" class="flex flex-row bg-background">
    <filter-bar id="filter-bar" class="w-1/5"/>
    <feed id="feed" class="w-4/5"/>
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