<template>
  <aside class="social">
    <ul class="space-y-4">
      <li>
        <a href="https://www.twitter.com/consolelogjordi" class="social__link">Tw</a>
      </li>
      <li>
        <a href="https://www.github.com/jordihales" class="social__link">Gh</a>
      </li>
      <li>
        <a href="https://www.codepen.io/jordihales" class="social__link">Cp</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jordi-hales-web-developer-essex/" class="social__link">In</a>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.social {
  @apply fixed right-0 hidden mr-8 transform -translate-y-1/2 top-1/2 font-mono;

  @screen md {
    @apply block;
  }

  &__link {
    @apply transform inline-block;

    &:hover {
      @apply -rotate-180;
    }
  }
}
</style>
