<template>
  <div id="thread-detail" class="">
    <div class="thread-wrapper flex flex-col h-98 pl-7 pt-7 w-full
                rounded-xl border bg-slate50 border-zinc400">
      <div class="header-container flex flex-col">
        <div class="top flex flex-row justify-between">
          <span class="flex flex-row">
            <channel id="channel" class="mr-3" :channel="channel"/>
            <status id="status" class="" :status="status"/>
          </span>
          <span class="date pr-6 font-nunito-sans font-regular tracking-tighter text-xs text-gray-500">
            {{ created_date }}
          </span>
        </div>
        <div class="title pt-2 font-nunito-sans font-extrabold tracking-tighter text-xl text-gray-700">
          {{ title }}
        </div>
        <div class="description w-14/16 pt-1 font-nunito-sans font-regular tracking-tighter text-sm text-gray-500">
          {{ description }}
        </div>
      </div>
      <div class="body-container flex flex-col w-full pt-3 w-15/16">
        <div class="flex flex-row">
          <span class="indent-bar w-5 h-full w-2 mr-4 bg-blue-400 opacity-80 rounded"/>
          <span class="response-container flex flex-col">
            <span class="response-container font-nunito-sans font-semibold tracking-tighter text-sm text-gray-800">
              {{ response }}
            </span>
            <span class="action-container flex flex-row pt-4">
              <action id="action" class="mr-2 border-green-600 hover:bg-green-50 text-green-700" action-type="Respond"/>
              <action id="action" class="mr-2 border-indigo-300 hover:bg-indigo-50 text-indigo-500" action-type="Invite to answer"/>
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
  data() {
		return {
      created_date: "Yesterday",
      title: "Anaemic domain models and ORMs?",
      description: "Rolling the Persistence Model as the Domain Model seems severely off too due to Object Relational Impedence Missmatch.",
      response: "ORMs don't enable the creation of Rich Domain models, it simplifies the amount of (often repetitive) work. Making your domain model anemic with all business logic in services won't save you from boilerplate DTO mapping code.",
      tags: ["ORM", "Domain-driven-design", "Peewee", "Repository"],
      status: "open",
      channel: "#TECH"
    }
  }
}
</script>

<style scoped>

</style>