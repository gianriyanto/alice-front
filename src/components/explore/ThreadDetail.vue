<template>
  <div id="thread-detail" class="">
    <div class="thread-wrapper flex flex-col h-80 pl-6 pr-4 pt-6 pb-2 w-full
                rounded-xl border bg-white border-gray-300">
      <div class="header-container flex flex-col">
        <status id="status" class="" status="open"/>
        <span class="title pt-3 font-nunito-sans font-extrabold tracking-tighter text-lg text-gray-700">
          {{ title }}
        </span>
      </div>
      <div class="body-container flex flex-col pt-2 w-full">
        <div class="flex flex-row pt-2 w-14/16">
          <span class="indent-bar w-2 h-full w-2 mr-3 bg-green-400 opacity-40"/>
          <span class="font-nunito-sans font-medium tracking-tighter text-sm text-gray-600">
            {{ response }}
          </span>
        </div>
        <div class="flex flex-wrap pt-4 w-13/16">
          <span v-for="tag in tags" class="mr-2">
            <tag id="tag" :tag="tag"></tag>
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Status from "../Status.vue";
import Tag from "./Tag.vue";
export default {
  name: "ThreadDetail",
  components: {Tag, Status},
  data() {
		return {
      title: "Anaemic domain models and ORMs?",
      response: "ORMs don't enable the creation of Rich Domain models (as some people mentioned), but it does simplify the the amount of (often repetitive) work.",
      tags: ["ORM", "Domain Driven Design", "peewee"]
    }
  }
}
</script>

<style scoped>

</style>