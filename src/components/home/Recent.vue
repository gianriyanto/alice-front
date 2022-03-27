<template>
  <div id="recent">
    <div class="recents-container flex flex-col h-full">
      <div class="recents-header h-4/16 flex flex-row justify-between ml-2">
        <span class="header font-nunito-sans text-lg font-extrabold tracking-tight text-gray-800">
          Recent
        </span>
        <button class="see-all-btn font-nunito-sans text-bluegray font-semibold tracking-tight text-sm mr-2">
          See all
        </button>
      </div>
      <div class="recent-items mt-2 h-24 w-full relative">
        <preview-card id="preview-card" class="text-gray-700 border bg-white border-bluegrey" title="Test vs Behavior Driven Design." created-timestamp="Today" body="Lorem ipsum dolor sit amet, consectetur tempor elit adipiscing elit, sed do eiusmod sit tempor incididunt elit ipsum dolor sit amet"/>
        <preview-card id="preview-card" class="text-gray-700 border bg-white border-bluegrey" title="How to deploy terraform?" created-timestamp="11 Oct" body="Lorem ipsum dolor sit amet, consectetur eiusmoda dipiscing elit, sed do eiusmod tempor incididunt eiusmod"/>
        <preview-card id="preview-card" class="text-gray-700 border bg-white border-bluegrey" title="Why can't I connect to VPN?" created-timestamp="10 Oct" body="Lorem ipsum dolor sit consectetur amet, eiusmod consectetur adipiscing dolor elit, sed do eiusmod dolor tempor incididunt"/>
        <preview-card id="preview-card" class="text-gray-700 border bg-white border-bluegrey" title="Thoughts on an anti-corruption layer." created-timestamp="Yesterday" body="Consectetur adipiscing elit, sed do eiusmod tempor incididunt exercitation aliquip ex ea commodo consequat."/>
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