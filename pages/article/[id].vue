<template>
<div class="lg:container mx-auto p-3 lg:p-0 lg:mt-28 lg:mb-6 xl:mb-8">
  <ProductDetail :product="data.product" />
</div>
</template>

<script>
export default {
  async setup() {
    const route = useRoute()

    const {
      data
    } = await useAsyncGql({
      operation: 'product',
      variables: {
        id: route.params.id
      }
    })

    return {
      data
    }
  }
}
</script>
