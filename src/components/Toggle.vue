<template>
  <button type="button" class="toggle" @click="$emit('toggle')"></button>
</template>

<style lang="scss" scoped>
.toggle {
  @apply inline-block w-6 h-6 border-2 rounded-full transition-colors duration-300;
  border-color: var(--text-color);

  &:focus {
    @apply outline-none shadow-outline;
  }
}
</style>
