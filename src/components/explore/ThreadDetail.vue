<template>
  <div id="thread-detail" class="">
    <div class="flex flex-col h-98 pl-7 pt-6 w-full
                rounded-xl border bg-slate50 border-zinc300">
      <div class="header-container flex flex-col">
        <div class="top flex flex-row justify-between">
          <span class="flex flex-row items-center">
            <channel id="channel" class="mr-3" :channel="channel"/>
            <status id="status" class="" :status="status"/>
          </span>
          <span class="date pr-7 font-nunito-sans font-regular tracking-tighter text-xs text-gray-500">
            {{ createdDate }}
          </span>
        </div>
        <div class="title pt-1 font-nunito-sans font-extrabold tracking-tighter text-xl text-gray-700">
          {{ title }}
        </div>
        <div class="description w-13/16 pt-1 font-nunito-sans font-regular tracking-tighter text-sm text-gray-500">
          {{ description }}
        </div>
      </div>
      <div class="body-container flex flex-col w-full pt-2 w-15/16">
        <div class="flex flex-row">
          <span class="indent-bar w-5 h-full w-2 mr-4 bg-blue-400 opacity-80 rounded"/>
          <span class="response-container flex flex-col">
            <span class="response-container font-nunito-sans font-semibold tracking-tighter text-sm text-gray-800">
              {{ response }}
            </span>
            <span class="action-container flex flex-row pt-4">
              <action id="action" class="mr-2 border-green-600 hover:bg-green-50 text-green-700" action-type="Respond"/>
              <action id="action" class="mr-2 border-indigo-400 hover:bg-indigo-50 text-indigo-500" action-type="Invite to answer"/>
              <action id="action" class="mr-2 border-zinc400 hover:bg-zinc50 text-zinc700" action-type="Keep me posted"/>
            </span>
          </span>
        </div>
        <div class="footer-container flex flex-col pt-5 justify-between">
          <span class="tags-container flex flex-wrap">
            <span v-for="tag in tags" class="mr-2">
              <tag id="tag" :tag="tag"></tag>
            </span>
          </span>
          <span class="more pt-4 h-8 cursor-pointer">
            <button class="font-nunito-sans font-bold tracking-tight text-sm text-blue-400">
              See more
            </button>
          </span>
<!--          <div class="react-container flex flex-row pt-4">-->
            <!-- <react id="react" reaction-type="+1" class="mr-2"/>-->
            <!-- <react id="react" reaction-type="look" class=""/>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Status from "../Status.vue";
import Tag from "../Tag.vue";
import Channel from "../Channel.vue";
import React from "../React.vue";
import Action from "../Action.vue";
export default {
  name: "ThreadDetail",
  components: {Action, React, Channel, Tag, Status},
  props: [
    "createdDate", "title", "description", "response", "tags", "status", "channel"
  ],
}
</script>

<style scoped>

</style>