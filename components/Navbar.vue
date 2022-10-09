<template>
<header class="bg-gray-700 border-b lg:fixed lg:w-full lg:top-0 lg:left-0 lg:z-30">
  <div class="container relative p-3 sm:px-0 mx-auto lg:flex lg:items-center lg:justify-between lg:space-x-10">
    <div class="flex justify-between">
      <a href="/" class="text-white">
        <div class="flex items-center">
          <p class="text-xl lg:ml-2">Shop <strong>Template</strong></p>
        </div>
      </a>
      <div class="flex items-center space-x-2 lg:hidden">
        <button c-click-outside="closeNavmenu" @click.stop="toggleNavmenu" class="p-1 rounded-md hover:bg-gray-800 focus:bg-gray-800 focus:outline-none">
          <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-sky-100">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <div class="bg-gray-700" :class="[navmenuVisible ? 'absolute z-50 translate-y-full left-0 right-0 bottom-0 border-t border-gray-800' : 'hidden']">
      <ul class="text-gray-100 transition-colors duration-300 p-0">
        <li class="border-b border-sky-100 last-of-type:border-b-0">
          <a href="/" class="block hover:text-gray-900 focus:text-gray-900 hover:bg-sky-300 focus:bg-sky-300 p-3">Products</a>
        </li>
        <li class="border-b border-sky-100 last-of-type:border-b-0">
          <a href="/" class="block hover:text-gray-900 focus:text-gray-900 hover:bg-sky-300 focus:bg-sky-300 p-3">Premium</a>
        </li>
        <li class="border-b border-sky-100 last-of-type:border-b-0">
          <a href="/" class="block hover:text-gray-900 focus:text-gray-900 hover:bg-sky-300 focus:bg-sky-300 p-3">Cheatsheet</a>
        </li>
        <li class="border-b border-sky-100 last-of-type:border-b-0">
          <a href="/" class="block hover:text-gray-900 focus:text-gray-900 hover:bg-sky-300 focus:bg-sky-300 p-3">Reviews</a>
        </li>
        <li class="border-b border-sky-100 last-of-type:border-b-0">
          <a href="/" class="block hover:text-gray-900 focus:text-gray-900 hover:bg-sky-300 focus:bg-sky-300 p-3">Login</a>
        </li>
        <li class="border-b border-sky-100 last-of-type:border-b-0">
          <a href="/" class="block hover:text-gray-900 focus:text-gray-900 hover:bg-sky-300 focus:bg-sky-300 p-3">Create account</a>
        </li>
      </ul>
    </div>
    <div class="hidden lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1 lg:space-x-2">
      <div class="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-6 xl:space-x-8 lg:items-center">
        <div class="relative inline-block hidden lg:block">
          <div>
            <button class="text-gray-100 hover:text-sky-300 transition-colors duration-300 flex items-center space-x-1 focus:outline-none">
              <span>Products</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div class="absolute left-0 z-20 py-1 mt-2 bg-white border border-gray-100 rounded-md shadow-xl lg:left-auto lg:right-0" style="display: none;">
            <div class="overflow-y-auto w-36 max-h-96">
              <a href="/" class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-sky-400">
                Partners
              </a>
              <a href="/reviews" class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-sky-400">
                Reviews
              </a>
              <a href="/" class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-sky-400">
                Customers
              </a>
              <a href="/" class="block px-4 py-2 text-sm text-gray-700 capitalize transition-colors duration-300 transform hover:text-sky-400">
                Stories
              </a>
            </div>
          </div>
        </div>
        <a href="/" class="text-gray-100 hover:text-sky-300 transition-colors duration-300 lg:hidden">Products</a>
        <a href="/" class="text-gray-100 hover:text-sky-300 transition-colors duration-300">Premium</a>
        <a href="/" class="text-gray-100 hover:text-sky-300 transition-colors duration-300">Cheatsheet</a>
        <a href="/" class="flex items-center space-x-2 text-gray-100 transition-colors duration-300 hover:text-sky-300">Reviews</a>
      </div>
      <div class="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-3">
        <a href="/login" class="flex items-center justify-center h-12 px-4 text-md font-medium text-center text-white transition-colors rounded-md lg:h-10">
          Login
        </a>
        <a href="/signup" class="flex items-center justify-center h-12 px-4 mt-2 text-md text-center text-white border-2 border-gray-600 rounded-lg lg:h-10 bg-gray-800 duration-300 transform hover:bg-sky-700 hover:border-sky-900 focus:outline-none">
          Create account
        </a>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  asyncData({
    $pinia
  }) {
    const store = useStore($pinia)
  },
  data() {
    return {
      navmenuVisible: false
    }
  },
  methods: {
    toggleNavmenu() {
      this.navmenuVisible = !this.navmenuVisible
    },
    closeNavmenu() {
      this.navmenuVisible = false
    }
  }
}
</script>
