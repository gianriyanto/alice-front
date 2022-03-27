<template>
  <div id="side-panel" class="p-4">
    <div class="content-wrapper rounded-xl w-full h-full pl-12 pr-12 pt-8 pb-8 bg-sidepanel flex flex-col justify-between border">
      <div class="header flex flex-row justify-between h-14">
        <span class="panel-tabs flex flex-row w-6/16">
          <button class="profile-btn mr-8 font-nunito-sans font-bold text-gray-700 text-md"> Profile </button>
<!--          <button class="settings-btn mr-8 font-nunito-sans font-bold text-gray-700 text-md"> Settings </button>-->
        </span>
        <img class="user-profile w-12 h-12 rounded-full" src="../../assets/my-portrait.png" alt="user-profile-photo"/>
      </div>
      <div class="body-container flex-grow flex-col pt-16">
        <div class="greeting-container flex flex-row">
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-extrabold tracking-tight text-lighterblue"> Hey </h1>
          <img class="h-9 w-9 mr-2" src="../../assets/emoji-wave.png" alt="wave-emoji"/>
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-semibold tracking-tight text-lighterblue"> Edward! </h1>
        </div>
        <recent id="recent" class="h-32 mt-12"/>
      </div>
      <div class="footer flex flex-row justify-center h-14">
        <button class="add-btn w-12 h-12 flex flex-wrap justify-center content-center rounded-2xl
        filter drop-shadow-2xl bg-blue-500 hover:opacity-90 duration-300 ease-in-out">
          <i class="ri-add-line" style="font-size: 28px; color: #FFFFFF"></i>
        </button>
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