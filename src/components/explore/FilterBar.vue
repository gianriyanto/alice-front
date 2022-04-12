<template>
  <div id="filter-bar" class="">
    <div class="content-wrapper flex flex-col bg-slate100 w-full h-full pt-5 pr-8 pl-8">
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
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label inline-block text-gray-600
                          font-nunito-sans font-semibold tracking-normal text-sm"
                   for="flexCheckDefault">
              Invited to Answer
            </label>
          </div>
          <div class="form-check mt-1">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-gray-600
                          font-nunito-sans font-semibold tracking-normal text-sm"
                   for="flexCheckDefault">
              Starred
            </label>
          </div>
          <div class="form-check mt-1">
            <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
            <label class="form-check-label inline-block text-gray-600
                          font-nunito-sans font-semibold tracking-normal text-sm"
                   for="flexCheckDefault">
              Created by you
            </label>
          </div>
        </div>
        <div id="status-selection" class="mt-8 w-full">
          <label class="font-nunito-sans mb-2 text-sm font-bold text-gray-700">
              Status
          </label>
          <div class="status-selection flex flex-row pt-2">
            <span class="status-chip flex w-5/16 h-9 pl-3 pr-3 border border-gray-300 rounded-l-md
                         hover:bg-blue-100 hover:border-blue-500 hover:opacity-80 duration-200 ease-in-out cursor-pointer">
              <span class="font-nunito-sans font-bold tracking-normal text-xs text-gray-500 m-auto">
                Open
              </span>
            </span>
            <span class="status-chip flex w-5/16 h-9 pl-3 pr-3 border-t border-b border-l border-r border-gray-300
                         hover:bg-indigo-100 hover:border-indigo-500 hover:opacity-80 hover:border-l duration-200 ease-in-out cursor-pointer">
              <span class="font-nunito-sans font-bold tracking-normal text-xs text-gray-500 m-auto">
                Closed
              </span>
            </span>
            <span class="status-chip flex w-5/16 h-9 pl-3 pr-3 border border-gray-300 rounded-r-md
                         hover:bg-green-100 hover:border-green-500 hover:opacity-80 duration-200 ease-in-out cursor-pointer">
              <span class="font-nunito-sans font-bold tracking-normal text-xs text-gray-500 m-auto">
                Verified
              </span>
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
      <div id="footer" class="flex flex-col h-24 justify-end">
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
      tags: ["Peewee", "ORM", "Git", "Database", "Config", "Cloud", "AWS", "Testing", "+"]
    }
  }
}
</script>

<style scoped>

</style>