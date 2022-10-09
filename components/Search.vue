<template>
<form @submit="lookup">
  <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
  <div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-2 md:pl-3 pointer-events-none">
      <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input v-model="term" type="search" id="default-search"
      class="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-sky-500 focus:border-sky-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
      placeholder="Search product or brand...">
    <button type="submit"
      class="text-white absolute right-1.5 bottom-1.5 bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Search</button>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      term: null
    }
  },
  methods: {
    lookup(event) {
      this.$emit('query', this.term)

      if (event) {
        event.preventDefault()
      }
    }
  }
}
</script>
