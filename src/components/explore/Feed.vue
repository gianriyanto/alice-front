<template>
  <div id="feed" class="">
    <div class="content-wrapper h-full flex flex-col pl-10">
      <search id="search" class="pl-10 pt-16"/>
      <div class="content-wrapper h-full flex flex-row">
        <channels id="channels" class="pl-2 pt-16"/>
        <thread-results id="thread-results" class="w-7/16 pt-12"/>
        <thread id="thread" class="w-9/16 pl-12 pr-12 pt-48"/>
      </div>
    </div>
  </div>
</template>

<script>
import Channels from "./Channels.vue";
import ThreadResults from "./ThreadResults.vue";
import Search from "../home/Search.vue";
import Thread from "./Thread.vue";
export default {
  name: "feed",
  components: {Thread, Search, ThreadResults, Channels}
}
</script>

<style scoped>

</style>