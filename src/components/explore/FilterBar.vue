<template>
  <div id="filter-bar" class="">
    <div class="content-wrapper flex flex-col bg-slate100 w-full h-full pt-28 pr-4 pl-12">
      <div id="header" class="mt-4">
        <h2 class="text-lg text-gray-800 font-nunito-sans
                   font-extrabold tracking-tight">
          Filters
        </h2>
      </div>
      <div id="personal-selection" class="mt-4">
        <div class="form-check mt-1">
          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label inline-block text-gray-600
                        font-nunito-sans font-bold tracking-normal text-sm"
                 for="flexCheckDefault">
            Invited to Answer
          </label>
        </div>
        <div class="form-check mt-1">
          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label inline-block text-gray-600
                        font-nunito-sans font-bold tracking-normal text-sm"
                 for="flexCheckDefault">
            Starred
          </label>
        </div>
        <div class="form-check mt-1">
          <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
          <label class="form-check-label inline-block text-gray-600
                        font-nunito-sans font-bold tracking-normal text-sm"
                 for="flexCheckDefault">
            Created by you
          </label>
        </div>
      </div>
      <div id="status-selection" class="mt-8">
        <label class="font-nunito-sans mb-2 text-sm font-bold text-gray-700">
            Status
        </label>
        <div class="status-selection flex flex-wrap">
          <span v-for="status in statuses" class="mr-2">
            <status-chip id="status-chips" :label="status"></status-chip>
          </span>
        </div>
      </div>
      <div id="channel-selection" class="mt-8">
        <label class="font-nunito-sans mb-2 text-sm font-bold text-gray-700">
            Channel
        </label>
        <div class="channel-chips flex flex-wrap">
          <span v-for="channel in channels" class="mr-2">
            <channel-chip id="channel-chip" :label="channel"></channel-chip>
          </span>
        </div>
      </div>
      <div id="tag-selection" class="mt-8">
        <label class="font-nunito-sans mb-2 text-sm font-bold text-gray-700">
            Tags
        </label>
        <div class="tag-chips flex flex-wrap">
          <span v-for="tag in tags" class="mr-2">
            <tag-chip id="tag-chip" :label="tag"></tag-chip>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "./ChannelChip.vue";
import ChannelChip from "./ChannelChip.vue";
import StatusChip from "./StatusChip.vue";
import TagChip from "./TagChip.vue";
export default {
  name: "filter-bar",
  components: {TagChip, StatusChip, ChannelChip, Chip},
  data() {
		return {
      statuses: ["Open", "Verified", "Closed"],
      channels: ["Tech", "HR", "Admin", "Platform", "+"],
      tags: ["Peewee", "ORM", "Git", "Database", "Config", "Cloud", "AWS", "Testing", "+"]
    }
  }
}
</script>

<style scoped>

</style>