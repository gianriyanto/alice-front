<template>
  <div id="logo-full" class="w-full flex flex-row items-center">
    <logo id="logo-1" class="w-10 h-10 mr-3"/>
    <h2 class="font-roboto-slab text-2xl pt-1 font-extrabold tracking-tight text-slate900">
      Alette.
    </h2>
  </div>
</template>

<script>

import Logo from "../assets/logo.vue";

export default {
  name: "LogoFull",
  components: {Logo}
}

</script>

<style scoped>

</style>