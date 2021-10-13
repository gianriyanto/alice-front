<template>
  <div id="recent">
    <div class="recents-container flex flex-col h-full">
      <div class="recents-header h-4/16 flex flex-row justify-between">
        <span class="header font-nunito-sans text-lg font-bold tracking-tighter text-gray-700">
          Recent
        </span>
        <button class="see-all-btn font-nunito-sans text-blue-400 font-medium text-sm">
          See all
        </button>
      </div>
      <div class="recent-items mt-4 h-32 w-full relative">
        <preview-card id="preview-card" class="text-gray-400 top-0 z-10 absolute border bg-white border-gray-300" title="Test vs Behavior Driven Design" created-timestamp="Today" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
        <preview-card id="preview-card" class="text-gray-600 top-14 z-20 absolute filter bg-gray-100 drop-shadow-xl border border-gray-400" title="Why should you use props" created-timestamp="Yesterday" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
        <preview-card id="preview-card" class="text-gray-400 top-44 z-30 absolute border bg-white border-gray-300" title="Is it worth using dataclasses" created-timestamp="11 Oct" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
        <preview-card id="preview-card" class="text-gray-400 top-56 z-40 absolute border bg-white border-gray-300" title="Why can't I connect to VPN" created-timestamp="10 Oct" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCard from "../PreviewCard.vue";
export default {
  name: "Recent",
  components: {PreviewCard},
  data: function () {
    return {

    }
  },

}
</script>

<style scoped>

</style>