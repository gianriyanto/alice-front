<template>
  <div id="create-thread" class="flex flex-row pt-4 pb-4 pl-4 pr-2">
    <div class="create-thread-wrapper flex flex-col w-full h-full pl-2 pr-4">
      <div class="flex flex-col">
        <h2 class="header text-xl text-gray-800 font-nunito-sans font-bold tracking-tight">
          Create Thread
        </h2>
      </div>
      <form class="form flex flex-col pt-12">
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
          <input id="inline-type"
                 class="block appearance-none w-full bg-zinc200 bg-opacity-60 border rounded-sm
                        border-zinc200 hover:border-zinc300 hover:bg-opacity-80 py-2 pl-2 pr-2
                        font-nunito-sans text-sm text-gray-600 leading-tight
                        rounded leading-tight focus:outline-none focus:shadow-outline"
                 type="text"
                 value="Question">
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
                    rows="4"/>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateThread"
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