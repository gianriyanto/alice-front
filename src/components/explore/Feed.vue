<template>
  <div id="feed" class="">
    <div class="content-wrapper h-full flex flex-col pl-10">
      <search id="search" class="pl-10 pt-16"/>
      <div class="content-wrapper h-full flex flex-row">
        <channels id="channels" class="pl-4 pt-16"/>
        <thread-results id="thread-results" class=""/>
      </div>
    </div>
  </div>
</template>

<script>
import Channels from "./Channels.vue";
import ThreadResults from "./ThreadResults.vue";
import Search from "../home/Search.vue";
export default {
  name: "feed",
  components: {Search, ThreadResults, Channels}
}
</script>

<style scoped>

</style>