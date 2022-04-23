<template>
  <div id="create-thread" class="flex flex-row pt-8 pb-4 pl-4 pr-2">
    <div class="create-thread-wrapper flex flex-col w-full h-auto pl-2 pr-4 pt-2">
      <div class="header flex flex-col h-16">
        <h2 class="title text-lg text-gray-800 font-nunito-sans
                   font-extrabold tracking-tight">
          Create Thread
        </h2>
      </div>
      <form class="create-form flex flex-col">
        <span class="channel-input flex flex-col w-10/16">
          <label class="font-nunito-sans mb-2 text-xs font-bold text-gray-700">
            Channel
          </label>
          <select class="block appearance-none w-full bg-zinc200 bg-opacity-60 border rounded-sm
                         border-zinc200 hover:border-zinc300 hover:bg-opacity-80 py-2 pl-2 pr-2
                         font-nunito-sans text-sm text-gray-600 leading-tight
                         rounded leading-tight focus:outline-none focus:shadow-outline">
            <option>Platform</option>
            <option>Tech</option>
            <option>HR</option>
          </select>
        </span>
        <span class="type-input flex flex-col w-10/16 mt-4">
          <label class="font-nunito-sans mb-2 text-xs font-bold text-gray-700">
            Type
          </label>
            <select class="block appearance-none w-full bg-zinc200 bg-opacity-60 border rounded-sm
                           border-zinc200 hover:border-zinc300 hover:bg-opacity-80 py-2 pl-2 pr-2
                           font-nunito-sans text-sm text-gray-600 leading-tight
                           rounded leading-tight focus:outline-none focus:shadow-outline">
              <option>Question</option>
              <option>Docs</option>
              <option>Share</option>
            </select>
        </span>
        <span class="Summary-input flex flex-col w-16/16 mt-10">
          <label class="font-nunito-sans mb-2 text-xs font-bold text-gray-700">
            Summary
          </label>
          <input id="inline-summary"
                 class="bg-zinc100 bg-opacity-70 border border-zinc300 appearance-none rounded-sm w-full py-2 pl-2 pr-2
                        font-nunito-sans font-medium text-sm text-gray-800 tracking-tight leading-tight
                        focus:outline-none focus:bg-white focus:border-purple-500"
                 type="text"
                 value="">
        </span>
        <span class="description-input flex flex-col w-16/16 mt-4">
          <label class="font-nunito-sans mb-2 text-xs font-bold text-gray-700">
            Description
          </label>
          <textarea id="inline-description"
                    class="bg-zinc100 bg-opacity-70 border border-zinc300 appearance-none rounded-sm w-full py-2 pl-2 pr-2
                    text-base font-nunito-sans text-gray-700 leading-tight
                           focus:outline-none focus:bg-white focus:border-purple-500"
                    rows="5"/>
        </span>
        <span class="tags-input flex flex-col w-6/16 mt-8">
          <label class="font-nunito-sans mb-2 text-xs font-bold text-gray-700">
            Tags
          </label>
          <input id="inline-tags"
                 class="block appearance-none w-full bg-zinc200 bg-opacity-60 border rounded-sm
                        border-zinc200 hover:border-zinc300 hover:bg-opacity-80 py-2 pl-2 pr-2
                        font-nunito-sans text-sm text-gray-700
                        rounded leading-tight focus:outline-none focus:shadow-outline"
                 type="text"
                 value="Tags">
        </span>
      </form>
      <span class="footer flex flex-row mt-28 h-9 justify-end">
        <span id="cancel-button"
              class="flex flex-col mr-2 pl-6 pr-6 pt-2 pb-2 justify-center
                     border border-zinc200 bg-zinc200 rounded-md bg-opacity-70
                     hover:bg-zinc200 hover:bg-opacity-70 duration-300 ease-in-out">
          <button class="font-nunito-sans font-bold text-gray-700 tracking-normal text-sm m-auto">
            Cancel
          </button>
        </span>
        <span id="create-button"
              class="flex flex-col pl-8 pr-8 pt-2 pb-2 justify-center
                     border rounded-md bg-blue-500
                     hover:bg-opacity-90 duration-300 ease-in-out">
          <button class="font-nunito-sans font-bold tracking-normal text-gray-100 text-sm m-auto">
            Create
          </button>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "CreateThread",
  methods: {
    // createThread() {
    //
    // }
  }
}
</script>

<style scoped>

#inline-description {
  font-family: "font-nunito-sans", sans-serif;
  font-size: 0.8rem; /* 12px */
  line-height: 1rem; /* 16px */
  letter-spacing: 0.01rem;
}

</style>