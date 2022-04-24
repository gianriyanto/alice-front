<template>
  <div id="filter-bar" class="">
    <div class="content-wrapper flex flex-col justify-between
                bg-slate100 w-full h-full pt-5 pb-4 pr-8 pl-8">
      <div class="flex flex-col">
        <div id="header-container" class="mt-4 flex flex-col">
        <logo-full id="logo-full" class="pt-2"></logo-full>
        <span id="header" class="flex flex-row justify-between mt-10">
          <h2 class="text-lg text-gray-800 font-nunito-sans font-extrabold tracking-tight">
            Filters
          </h2>
          <button class="text-gray-800 font-semibold font-nunito-sans text-xs tracking-tight
                         hover:bg-opacity-90 hover:text-blue-400 duration-300 ease-in-out">
            Clear
          </button>
        </span>
      </div>
        <div id="filter-form" class="mt-4">
          <div id="personal-selection" class="">
            <div class="form-check mt-1">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="">
              <label class="form-check-label inline-block text-gray-600
                            font-nunito-sans font-semibold tracking-normal text-sm">
                Invited to Answer
              </label>
            </div>
            <div class="form-check mt-1">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" checked>
              <label class="form-check-label inline-block text-gray-600
                            font-nunito-sans font-semibold tracking-normal text-sm">
                Starred
              </label>
            </div>
            <div class="form-check mt-1">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" checked>
              <label class="form-check-label inline-block text-gray-600
                            font-nunito-sans font-semibold tracking-normal text-sm">
                Created by you
              </label>
            </div>
          </div>
          <div id="status-selection" class="mt-7">
            <label class="font-nunito-sans mb-2 text-sm font-bold text-gray-700">
                Status
            </label>
            <div class="form-check mt-1">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="">
              <label class="form-check-label inline-block text-gray-600
                            font-nunito-sans font-semibold tracking-normal text-sm">
                Open
              </label>
            </div>
            <div class="form-check mt-1">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" checked>
              <label class="form-check-label inline-block text-gray-600
                            font-nunito-sans font-semibold tracking-normal text-sm">
                Closed
              </label>
            </div>
            <div class="form-check mt-1">
              <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" checked>
              <label class="form-check-label inline-block text-gray-600
                            font-nunito-sans font-semibold tracking-normal text-sm">
                Verified
              </label>
            </div>
          </div>
          <div id="channel-selection" class="mt-7">
            <label class="font-nunito-sans mb-2 text-sm font-bold text-gray-700">
                Channel
            </label>
            <div class="channel-chips flex flex-wrap">
              <span v-for="channel in channels" class="mr-2">
                <channel-chip id="channel-chip" :label="channel"></channel-chip>
              </span>
            </div>
          </div>
          <div id="tag-selection" class="mt-7">
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
      <div id="footer" class="flex flex-col justify-end">
        <span id="create-button"
              class="flex flex-col pl-8 pr-8 pt-2 pb-2 justify-center
                     border rounded-md bg-blue-500
                     hover:bg-opacity-90 duration-300 ease-in-out">
          <button class="font-nunito-sans font-bold tracking-normal text-gray-100 text-sm m-auto">
            Apply Filters
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Chip from "./ChannelChip.vue";
import ChannelChip from "./ChannelChip.vue";
import StatusChip from "./StatusChip.vue";
import TagChip from "./TagChip.vue";
import Logo from "../LogoFull.vue";
import LogoFull from "../LogoFull.vue";

export default {
  name: "filter-bar",
  components: {LogoFull, Logo, TagChip, StatusChip, ChannelChip, Chip},
  data() {
		return {
      statuses: ["Open", "Verified", "Closed"],
      channels: ["Tech", "HR", "Admin", "Platform", "+"],
      tags: ["Peewee", "ORM", "Git", "Database", "Config", "Cloud", "Testing", "+"]
    }
  }
}
</script>

<style scoped>

</style>