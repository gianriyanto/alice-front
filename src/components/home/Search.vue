<template>
  <div id="search">
    <div class="search-container flex flex-row h-full">
      <span class="cursor w-0.5 h-full bg-gray-600 opacity-70 mr-0.5 blink_me"></span>
      <h2 class="self-center w-full font-nunito-sans text-2xl font-semibold tracking-normal text-gray-300">
        Search and you shall find...
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

.blink_me {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>