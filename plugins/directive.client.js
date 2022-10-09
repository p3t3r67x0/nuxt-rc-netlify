export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount(el, binding, vnode) {
      el.clickOutsideEvent = (event) => {
        if (!(el == event.target || el.contains(event.target))) {
          binding.instance[binding.expression](event)
        }
      }

      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  })
})
