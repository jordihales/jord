<template>
  <footer class="footer">
    <a class="footer__link" href="mailto:jordi@halesdesignco.com">Contact Me</a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.footer {
  @apply px-8 py-4;

  &__link {
    @apply font-mono text-lg uppercase pb-1 relative;

    &:before {
      content: '';
      @apply bottom-0 left-0 w-full h-px absolute transition-size duration-200;
      background-color: var(--text-color);
    }

    &:hover {
      &:before {
        @apply w-0;
      }
    }
  }
}
</style>
