<template>
  <header class="header">
    <Logo />
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
  </header>
</template>



<script>
import Logo from '@/components/Logo'
import Toggle from '@/components/Toggle'

export default {
  props: ['mode'],
  components: {
    Logo,
    Toggle,
  },
}
</script>

<style lang="scss" scoped>
.header {
  @apply fixed inset-x-0 top-0 flex items-center justify-between px-8 py-4 z-50;
}
</style>