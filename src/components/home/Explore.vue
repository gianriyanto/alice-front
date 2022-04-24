<template>
  <div id="explore">
    <div class="explore-container flex-column">
      <h3 class="header h-2/16 font-nunito-sans text-lg font-bold tracking-tighter text-slate800">
        Explore
      </h3>
      <div class="explore-tags h-14/16 mt-0 flex flex-wrap">
        <div v-for="tag in tags.slice(0, 6)">
          <explore-tag-chip class="tag" :tagName="tag"/>
        </div>
        <explore-tag-chip class="tag bg-yellow-300" tagName="more"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import util from "../../util";
import ExploreTagChip from "./TagChip.vue";

export default {
  name: "Explore",
  components: {ExploreTagChip},
  data() {
    return {
      tags: []
    }
  },
  mounted() {
    this.getTags()
  },
  methods: {
    getTags() {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/api/tags`)
        .then((response) => {
          this.tags = response.data
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