<template>
  <div id="thread-results" class="">
    <div class="thread-container flex flex-col">
      <preview-card id="preview-card" class="text-gray-700 border bg-white"
                    title="Test vs Behavior Driven Design."
                    created-timestamp="Today"
                    body="Lorem ipsum dolor sit amet, consectetur tempor elit adipiscing elit, sed do ipsum dolor sit amet"/>
      <preview-card id="preview-card"
                    class="text-gray-700 border bg-slate50 border-zinc300 shadow-sm"
                    title="Anaemic domain models and ORMs?"
                    created-timestamp="Yesterday"
                    body="Lorem ipsum dolor sit amet, eiusmoda dipiscing elit, sed do eiusmod tempor incididunt eiusmod"/>
      <preview-card id="preview-card"
                    class="text-gray-700 border bg-white"
                    title="Why can't I connect to VPN?"
                    created-timestamp="10 Oct"
                    body="Lorem ipsum dolor sit consectetur amet, eiusmod dolor elit, sed do eiusmod dolor tempor incididunt"/>
      <preview-card id="preview-card"
                    class="text-gray-700 border bg-white"
                    title="Thoughts on an anti-corruption layer."
                    created-timestamp="Yesterday"
                    body="Adipiscing elit, sed tempor incididunt exercitation aliquip ex ea commodo consequat."/>
      <preview-card id="preview-card"
                    class="text-gray-700 border bg-white"
                    title="What is a bounded context?"
                    created-timestamp="Yesterday"
                    body="Adipiscing elit, sed tempor incididunt exercitation aliquip ex ea commodo consequat."/>
      <preview-card id="preview-card"
                    class="text-gray-700 border bg-white"
                    title="What's the best way to whiteboard?"
                    created-timestamp="Yesterday"
                    body="Adipiscing elit, sed tempor incididunt exercitation aliquip ex ea commodo consequat."/>
    </div>
  </div>
</template>

<script>
import PreviewCard from "../PreviewCard.vue";
export default {
  name: "ThreadResults",
  components: {PreviewCard}
}
</script>

<style scoped>

</style>