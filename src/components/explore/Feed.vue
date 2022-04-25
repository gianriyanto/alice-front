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
        <div id="thread-detail-container" class="w-8/16">
          <div v-if="threadDetail._id === undefined" class="flex h-98">
            <!-- TODO: Add empty state-->
          </div>
          <div v-else>
            <thread-detail
              id="thread-detail"
              class="pl-7 pr-10 pt-48"
              :createdDate="reformatDate(threadDetail.created_date)"
              :title="threadDetail.title"
              :description="threadDetail.description"
              :response="getFirstResponse(threadDetail.responses)"
              :tags="threadDetail.tags"
              :status="threadDetail.status"
              :channel="format(threadDetail.channel)"
            />
          </div>
        </div>

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
    }
  },
  async mounted() {
    console.log(this.threadDetail._id)
    await this.getThreads()
    console.log(this.threadDetail)
  },
  methods: {
    getFirstResponse(responses) {
      // TODO: Handle undefined, Wait until data is available
      if (responses === undefined) {
        return false
      }
      // TODO: should display verified response in the ThreadDetail component
      // current implementation is a hack to just display a response
      return responses[0].body
    },
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
      // TODO: Handle undefined, Wait until data is available
      if (datetime === undefined) {
        return false
      }
      return util.datetimeToShortDateString(datetime)
    },
    format(channel) {
      // TODO: Handle undefined, Wait until data is available
      if (channel === undefined) {
        return false
      }
      return `#${channel.toUpperCase().slice(0,4)}`
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