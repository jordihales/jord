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
  @apply px-8 py-4 relative z-10;
  background-color: var(--body-color);

  &__link {
    @apply font-mono text-lg uppercase pb-1 relative transform inline-block;

    &:hover {
      @apply -rotate-180;
    }
  }
}
</style>
