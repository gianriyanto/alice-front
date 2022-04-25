<template>
  <div id="feed" class="w-full">
    <div class="content-wrapper full flex h-full flex-col">
      <search id="search" class="h-24 pl-12 pt-3"/>
      <div class="content-wrapper h-full flex flex-row">
        <channels id="channels" class="w-1/18 pl-12 pt-12"/>
        <div id="thread-results" class="w-7/16 pl-10 pr-5 h-thread-feed overflow-y-auto hide-scrollbar">
          <div class="thread-container flex flex-col">
            <div v-for="thread in threadResults">
              <preview-card
                id="preview-card"
                class="text-gray-700 border border-zinc300 bg-gray-50"
                :title="thread.title"
                :created-timestamp="reformatDate(thread.created_date)"
                :body="thread.description"
                v-on:click="getThreadDetail(thread._id)"
              />
            </div>
          </div>
        </div>
        <thread-detail
          id="thread-detail"
          class="w-8/16 pl-7 pr-10 pt-48"
          :createdDate="created_date"
          :title="title"
          :description="description"
          :response="response"
          :tags="tags"
          :status="status"
          :channel="channel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Channels from "./Channels.vue";
import Search from "../home/Search.vue";
import ThreadDetail from "./ThreadDetail.vue";
import axios from "axios";
import PreviewCard from "../PreviewCard.vue";
import util from "../../util";

export default {
  name: "feed",
  components: {PreviewCard, ThreadDetail, Search, Channels},
  data() {
    return {
      threadResults: [],
      threadDetail: {},
      created_date: "Yesterday",
      title: "Anaemic domain models and ORMs?",
      description: "Rolling the Persistence Model as the Domain Model seems severely off too due to Object Relational Impedence Missmatch.",
      response: "ORMs don't enable the creation of Rich Domain models, it simplifies the amount of (often repetitive) work. Making you" +
          "r domain model anemic with all business logic in services won't save you from boilerplate DTO mapping code.",
      tags: ["ORM", "Domain-driven-design", "Peewee", "Repository"],
      status: "OPEN",
      channel: "#TECH"
    }
  },
  mounted() {
    this.getThreads()
  },
  methods: {
    getThreadDetail(thread_id) {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/thread/${thread_id}`)
        .then((response) => {
          this.threadDetail = response.data
        })
        .catch((error) => {
          console.log(`Error fetching thread ${thread_id}`)
        })
    },
    getThreads() {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/threads`)
        .then((response) => {
          this.threadResults = response.data
        })
        .catch((error) => {
          console.log("Error fetching threads")
      })
    },
    reformatDate(datetime) {
      return util.datetimeToShortDateString(datetime)
    }
  }
}
</script>

<style scoped>

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>