<template>
  <div id="feed" class="">
    <div class="content-wrapper h-full flex flex-col">
      <search id="search" class="pl-10 pt-16"/>
      <div class="content-wrapper h-full flex flex-row">
        <channels id="channels" class="w-1/18 pl-10 pt-16"/>
        <thread-results id="thread-results" class="w-7/16 pl-8 pt-12"/>
        <thread-detail id="thread-detail" class="w-8/16 pl-8 pr-10 pt-48"/>
      </div>
    </div>
  </div>
</template>

<script>
import Channels from "./Channels.vue";
import ThreadResults from "./ThreadResults.vue";
import Search from "../home/Search.vue";
import ThreadDetail from "./ThreadDetail.vue";

export default {
  name: "feed",
  components: {ThreadDetail, Search, ThreadResults, Channels}
}
</script>

<style scoped>

</style>