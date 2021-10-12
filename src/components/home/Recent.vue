<template>
  <div id="recent">
    <div class="recents-container flex flex-col h-32 mt-12">
      <div class="recents-header h-4/16 flex flex-row justify-between">
        <span class="header font-nunito-sans text-lg font-bold tracking-tighter text-gray-700">
          Recent
        </span>
        <button class="see-all-btn font-nunito-sans text-blue-400 font-medium text-sm">
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
</template>

<script>
import PreviewCard from "../PreviewCard.vue";
export default {
  name: "Recent",
  components: {PreviewCard}
}
</script>

<style scoped>

</style>