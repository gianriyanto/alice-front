<template>
  <div id="thread" class="">
    <div class="thread-wrapper flex flex-col h-80 pl-4 pr-4 pt-4 pb-2 w-full rounded-xl border bg-white border-bluegrey">
      <div class="header-container">
        <status id="status" class="" status="open"/>
      </div>
      <div class="body-container">

      </div>
      <div class="response-container">

      </div>
    </div>
  </div>
</template>

<script>
import Status from "../Status.vue";
export default {
  name: "Thread",
  components: {Status}
}
</script>

<style scoped>

</style>