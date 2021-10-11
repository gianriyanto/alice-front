<template>
  <div id="side-panel" class="p-4 h-full">
    <div class="content-wrapper rounded-2xl w-full h-full pl-12 pr-12 pt-8 pb-8 bg-bluegrey flex flex-col justify-between">
      <div class="header flex flex-row justify-between h-14">
        <span class="panel-tabs flex flex-row w-6/16">
          <button class="profile-btn mr-8 font-nunito-sans font-bold text-gray-700 text-lg">
            Profile
          </button>
          <button class="settings-btn mr-8 font-nunito-sans font-bold text-gray-700 text-lg">
            Settings
          </button>
        </span>
        <span class="user-profile w-12 h-12 rounded-full bg-gray-300"/>
      </div>
      <div class="body-container flex-grow flex-col pt-16">
        <div class="greeting-container flex flex-row">
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-extrabold color-darkblue"> Hey </h1>
          <img class="h-8 w-8 mr-2" src="src/assets/emoji-wave.png" alt="wave-emoji"/>
          <h1 class="greeting mr-2 font-roboto-slab text-3xl font-semibold color-darkblue"> Edward! </h1>
        </div>
        <p class="notifications font-nunito-sans font-normal text-gray-700 tracking-tighter pt-3">
          Glad you're back, you've got <strong> {{ notificationCount }} </strong> new notifications.
        </p>
        <div class="recents-container flex flex-col h-32 mt-8">
          <div class="recents-header h-4/16 flex flex-row justify-between">
            <span class="header font-nunito-sans text-lg font-bold tracking-tighter text-gray-700">
              Recent
            </span>
            <button class="see-all-btn font-nunito-sans text-blue-500 font-medium text-sm">
              See all
            </button>
          </div>
          <div class="recent-items mt-4 h-32 w-full relative">
            <preview-card id="preview-card" class="top-0 z-10 absolute"/>
            <preview-card id="preview-card" class="top-12 z-20 absolute"/>
            <preview-card id="preview-card" class="top-40 z-30 absolute"/>
            <preview-card id="preview-card" class="top-52 z-40 absolute shadow-sm"/>
          </div>
        </div>
      </div>
      <div class="footer flex flex-row justify-center h-14">
        <button class="add-btn w-12 h-12 flex flex-wrap justify-center content-center rounded-full shadow-2xl bg-blue-700 opacity-70">
          <i class="ri-add-line" style="font-size: 28px; color: #FFFFFF"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCard from "../PreviewCard.vue";
export default {
  name: "SidePanel",
  components: {PreviewCard},
  data: function () {
    return {
      notificationCount: 3
    }
  },
}
</script>

<style scoped>

</style>