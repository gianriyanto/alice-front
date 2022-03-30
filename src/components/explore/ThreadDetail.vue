<template>
  <div id="thread-detail" class="">
    <div class="thread-wrapper flex flex-col h-96 pl-7 pr-2 pt-7 pb-2 w-full
                rounded-xl border bg-white border-gray-300">
      <div class="header-container flex flex-col">
        <span class="top flex flex-row">
          <channel id="channel" class="mr-2" :channel="channel"/>
          <status id="status" class="" :status="status"/>
        </span>
        <span class="title pt-2 font-nunito-sans font-extrabold tracking-tighter text-xl text-gray-700">
          {{ title }}
        </span>
        <span class="description w-14/16 pt-1 font-nunito-sans font-regular tracking-tighter text-sm text-gray-500">
          {{ description }}
        </span>
      </div>
      <div class="body-container flex flex-col w-full">
        <div class="flex flex-row pt-3 w-15/16">
          <span class="indent-bar w-5 h-full w-2 mr-3 bg-green-400 opacity-40"/>
          <span class="response-container flex flex-col">
            <span class="response-container font-nunito-sans font-semibold tracking-tighter text-sm text-gray-700">
              {{ response }}
            </span>
            <span class="action-container flex flex-row pt-3">
              <action id="action" class="mr-2" action-type="Respond"/>
              <action id="action" class="mr-2" action-type="Keep me posted"/>
              <action id="action" action-type="Invite to answer"/>
            </span>
          </span>
        </div>
        <div class="tags-container flex flex-wrap pt-6 w-13/16">
          <span v-for="tag in tags" class="mr-2">
            <tag id="tag" :tag="tag"></tag>
          </span>
        </div>
        <div class="react-container flex flex-row pt-4">
          <!-- <react id="react" reaction-type="+1" class="mr-2"/>-->
          <!-- <react id="react" reaction-type="look" class=""/>-->
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
import Action from "../Action.vue";
export default {
  name: "ThreadDetail",
  components: {Action, React, Channel, Tag, Status},
  data() {
		return {
      title: "Anaemic domain models and ORMs?",
      description: "Rolling the Persistence Model as the Domain Model seems severely off too due to Object Relational Impedence Missmatch.",
      response: "ORMs don't enable the creation of Rich Domain models, it simplifies the amount of (often repetitive) work. Making your domain model anemic with all business logic in services won't save you from boilerplate DTO mapping code.",
      tags: ["ORM", "Domain Driven Design", "peewee"],
      status: "open",
      channel: "#TECH"
    }
  }
}
</script>

<style scoped>

</style>