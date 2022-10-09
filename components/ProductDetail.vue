<template>
<div class="bg-gray-100 sm:flex sm:flex-col justify-between sm:p-3">
  <h1 class="leading-relaxed font-extrabold text-2xl sm:text-3xl md:text-4xl px-3 sm:p-0 mb-4 md:mb-6">
    {{ product.name }}
  </h1>
  <div class="sm:flex lg:pt-3">
    <div class="w-full sm:w-4/12 md:w-5/12 lg:w-4/12 px-3 sm:p-0 mb-3 sm:mb-0">
      <img :src="product.media[0].url" alt="some alt text" layout="fill" />
    </div>
    <div class="w-full sm:w-8/12 md:w-7/12 lg:w-8/12 px-3 pb-3 sm:py-0 sm:pr-0 sm:pl-6">
      <p class="lg:font-medium md:text-lg mb-3 lg:mb-0">
        {{ description(product.description) }}
      </p>
      <p class="text-gray-500 text-base lg:hidden">Pricing</p>
      <p class="text-xl lg:text-2xl font-medium lg:text-right mb-3 lg:mb-0">
        XXX Eur
      </p>
      <div class="w-full">
        <div class="flex justify-start space-x-2 w-full">
          <div class="flex flex-col items-start flex-grow-0">
            <label class="text-gray-500 text-base mb-2">Qty.</label>
            <input type="text" name="quantity" min="1" step="1" class="border border-gray-500 w-16 rounded focus:border-sky-500 focus:ring-sky-500 p-2">
          </div>
          <div class="flex flex-col w-full">
            <label class="text-gray-500 text-base mb-2">Size</label>
            <div class="relative">
              <button c-click-outside="closeDropdown" type="button" class="w-full border border-gray-300 bg-gray-300 focus:bg-gray-400 hover:bg-gray-400 rounded p-2" @click.stop="toggleDropdown">
                Some dropdown
              </button>
              <div class="absolute bottom-0 translate-y-full w-full">
                <ul v-show="dropdownVisible" class="cursor-pointer border mt-1 bg-gray-100 block z-50">
                  <li class="hover:bg-gray-300 focus:bg-gray-300 border-b p-3">Lorem ipsum</li>
                  <li class="hover:bg-gray-300 focus:bg-gray-300 border-b p-3">Lorem ipsum dolor sit</li>
                  <li class="hover:bg-gray-300 focus:bg-gray-300 p-3">Lorem ipsum dolor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <button @click="addItem(product.id)" type="button" lass="pt-3 pb-2 bg-sky-500 text-white w-full mt-2 rounded-sm font-primary text-xl flex justify-center items-baseline hover:bg-sky-600 cursor-pointer">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      dropdownVisible: false
    }
  },
  props: [
    'product'
  ],
  methods: {
    addItem(id) {
      this.$store.commit('add', id)
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible
    },
    closeDropdown() {
      this.dropdownVisible = false
    },
    description(v) {
      const ar = JSON.parse(v).blocks.filter(a => a.type == 'paragraph')

      return ar.length > 0 ? ar[0].data.text : ''
    }
  }
}
</script>
