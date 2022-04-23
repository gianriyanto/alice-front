<template>
  <div id="thread-results" class="">
    <div class="thread-container flex flex-col">
      <div v-for="thread in threadResults">
        <preview-card
            id="preview-card"
            class="text-gray-700 border border-zinc300 bg-gray-50"
            :title="thread.title"
            :created-timestamp="reformatDate(thread.created_date)"
            :body="thread.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCard from "../PreviewCard.vue";
import axios from "axios";
import util from "../../util";

export default {
  name: "ThreadResults",
  components: {PreviewCard},
  data() {
    return {
      threadResults: [],
      monthMapping: {
        "01": "Jan",
        "02": "Feb",
        "03": "Mar",
        "04": "Apr",
        "05": "May",
        "06": "Jun",
        "07": "Jul",
        "08": "Aug",
        "09": "Sep",
        "10": "Oct",
        "11": "Nov",
        "12": "Dec"
      }
    }
  },
  mounted() {
    this.getThreads()
  },
  methods: {
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

</style>