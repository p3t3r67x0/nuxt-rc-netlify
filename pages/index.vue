<template>
<div class="lg:container mx-auto p-3 lg:p-0 lg:mt-28 lg:mb-6 xl:mb-8">
  <Search class="mb-3 lg:mb-6" @query="lookupProducts" />
  <h2 class="font-medium text-l md:text-3xl mb-2">{{ resultsHeader(resultLength) }}</h2>
  <ul class="grid grid-flow-cols grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-3 md:gap-y-8">
    <li v-for="row in rows" :key="row.node.id">
      <Products :product="row.node" />
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      rows: {},
      resultLength: 0
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const {
        data
      } = await useAsyncGql({
        operation: 'products'
      })

      this.rows = data.value.products.edges
    },
    async lookupProducts(query) {
      const {
        data
      } = await useAsyncGql({
        operation: 'lookup',
        variables: {
          query: query
        }
      })

      if (data.value) {
        this.rows = data.value.products.edges
        this.resultLength = this.rows.length
      }
    },
    resultsHeader(l) {
      const c = l > 0 ? `${l} search result${l > 1 ? 's' : ''}` : 'No results found'

      return this.resultLength > 0 ? c : 'Recommandations'
    }
  }
}
</script>
