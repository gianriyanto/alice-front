<template>
  <div id="side-panel" class="p-4">
    <div class="content-wrapper bg-slate100 rounded-xl w-full h-full pl-8 pr-8 pt-8 pb-8 bg-slate-200 flex flex-col justify-between border">
      <div class="header flex flex-row justify-between h-14">
        <span class="panel-tabs flex flex-row w-6/16"></span>
        <img class="user-profile w-10 h-10 rounded-full border" src="../../assets/my-portrait.png" alt="user-profile-photo"/>
      </div>
      <div class="body-container flex-grow flex-col pt-14">
        <Recent id="Recent" class="h-32"/>
      </div>
    </div>
  </div>
</template>

<script>
import Recent from "./Recent.vue";
export default {
  name: "SidePanel",
  components: {Recent},
  data: function () {
    return {
      notificationCount: 3
    }
  },
}
</script>

<style scoped>

</style>