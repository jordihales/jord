<template>
  <header class="header">
    <Logo :fill="fill" />
    <Toggle v-if="toggleable" :mode="mode" @toggle="$emit('toggle')" />
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import Toggle from '@/components/Toggle'

export default {
  data() {
    return {
      fill: this.mode,
    }
  },
  props: {
    mode: String,
    toggleable: Boolean,
  },
  components: {
    Logo,
    Toggle,
  },
  mounted() {
    document.addEventListener('scroll', () => {
      const projectBanner = document.querySelector('#projectBanner')

      if (projectBanner) {
        this.fill = window.scrollY + 50 > projectBanner.getBoundingClientRect().bottom ? 'text-black' : 'text-white'
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply fixed inset-x-0 top-0 flex items-center justify-between px-8 py-4 z-50;
}
</style>
