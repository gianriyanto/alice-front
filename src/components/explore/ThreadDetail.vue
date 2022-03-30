<template>
  <div id="thread-detail" class="">
    <div class="thread-wrapper flex flex-col h-80 pl-6 pr-3 pt-6 pb-2 w-full
                rounded-xl border bg-white border-gray-300">
      <div class="header-container flex flex-col">
        <span class="top flex flex-row">
          <channel id="channel" class="mr-2" :channel="channel"/>
          <status id="status" class="" :status="status"/>
        </span>
        <span class="title pt-3 font-nunito-sans font-extrabold tracking-tighter text-xl text-gray-700">
          {{ title }}
        </span>
      </div>
      <div class="body-container flex flex-col pt-1 w-full">
        <div class="response-container flex flex-row pt-2 w-15/16">
          <span class="indent-bar w-2 h-full w-2 mr-3 bg-green-400 opacity-40"/>
          <span class="font-nunito-sans font-medium tracking-tighter text-sm text-gray-600">
            {{ response }}
          </span>
        </div>
        <div class="tags-container flex flex-wrap pt-4 w-13/16">
          <span v-for="tag in tags" class="mr-2">
            <tag id="tag" :tag="tag"></tag>
          </span>
        </div>
        <div class="react-container flex flex-row pt-4">
          <react id="react" reaction-type="+1" class="mr-2"/>
          <react id="react" reaction-type="look" class=""/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Status from "../Status.vue";
import Tag from "./Tag.vue";
import Channel from "../Channel.vue";
import React from "../React.vue";
export default {
  name: "ThreadDetail",
  components: {React, Channel, Tag, Status},
  data() {
		return {
      title: "Anaemic domain models and ORMs?",
      response: "ORMs don't enable the creation of Rich Domain models, it simplifies the amount of (often repetitive) work. Making your domain model anemic with all business logic in services won't necessarily save you from boilerplate DTO mapping code or remove the need for client-side.",
      tags: ["ORM", "Domain Driven Design", "peewee"],
      status: "open",
      channel: "#TECH"
    }
  }
}
</script>

<style scoped>

</style>