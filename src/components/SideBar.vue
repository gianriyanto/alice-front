<template>
  <div id="side-bar">
    <div class="content-wrapper h-full w-full flex flex-col items-center justify-between pt-11 pb-10">
      <div class="logo w-full justify-center flex">
        <logo id="logo" class="w-14 h-14"/>
      </div>
      <button class="logout hover:opacity-60 duration-200 ease-in-out">
        <i class="ri-logout-box-r-line" style="font-size: 30px; color: #e2e2e2"/>
      </button>
    </div>
  </div>
</template>

<script>
import Logo from "../assets/logo.vue";
export default {
  name: "SideBar",
  components: {Logo}
}
</script>

<style scoped>

</style>