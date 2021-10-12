<template>
  <div id="side-panel" class="p-4 h-full">
    <div class="content-wrapper rounded-2xl w-full h-full pl-12 pr-12 pt-8 pb-8 bg-bluegrey flex flex-col justify-between">
      <div class="header flex flex-row justify-between h-14">
        <span class="panel-tabs flex flex-row w-6/16">
          <button class="profile-btn mr-8 font-nunito-sans font-bold text-gray-700 text-md"> Profile </button>
          <button class="settings-btn mr-8 font-nunito-sans font-bold text-gray-700 text-md"> Settings </button>
        </span>
        <img class="user-profile w-12 h-12 rounded-full" src="../../assets/my-portrait.png" alt="user-profile-photo"/>
      </div>
      <div class="body-container flex-grow flex-col pt-20">
        <div class="greeting-container flex flex-row">
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-extrabold text-lighterblue"> Hey </h1>
          <img class="h-9 w-9 mr-2" src="../../assets/emoji-wave.png" alt="wave-emoji"/>
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-bold text-lighterblue"> Edward! </h1>
        </div>
        <p class="notifications font-nunito-sans font-normal text-gray-700 tracking-tighter pt-3">
          Glad you're back, you've got <strong> {{ notificationCount }} </strong> new notifications.
        </p>
        <recent id="recent" class="h-32 mt-8"/>
      </div>
      <div class="footer flex flex-row justify-center h-14">
        <button class="add-btn w-12 h-12 flex flex-wrap justify-center content-center rounded-full filter drop-shadow-xl bg-blue-500 hover:opacity-90 duration-300 ease-in-out">
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