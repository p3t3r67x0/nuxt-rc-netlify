<template>
<nuxt-link :to="`/article/${product.id}`" class="bg-gray-100 block border border-gray-400 rounded">
  <div class="bg-white border-b-1 text-center p-3">
    <img :src="product.thumbnail.url" alt="some alt text" layout="fill" class="inline w-auto h-48" />
  </div>
  <div class="bg-gray-200 p-3">
    <div class="h-52">
      <div class="font-primary text-2xl font-semibold mb-4">
        {{ product.name }}
      </div>
      <div class="text-lg text-gray-600 font-primary font-light">
        {{ description(product.description) }}
      </div>
    </div>
    <div class="text-right font-primary font-medium text-base triangle p-2">
      {{ product.pricing.priceRange.start.gross.amount }} Eur
    </div>
  </div>
</nuxt-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    description(v) {
      const ar = JSON.parse(v).blocks.filter(a => a.type == 'paragraph')

      return ar.length > 0 ? this.truncate(ar[0].data.text) : ''
    },
    truncate(v) {
      const tl = this.product.name.length
      const sc = (this.product.name.match(/[A-Za-z0-9&#,+()$~%'":*?<>{}^]/mg) || []).length
      const kc = parseInt((100 * 30) / tl)
      const ad = !isNaN(parseFloat(sc)) && isFinite(sc) && sc > 70 ? parseInt(0) : kc
      const xd = kc > 150 ? (kc - sc) : ad

      return xd > 0 ? v.substring(0, xd) + '…' : ''
    }
  }
}
</script>
