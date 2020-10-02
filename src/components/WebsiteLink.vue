<template>
  <a
    :href="path"
    class="website-link"
    :style="`color: ${$page.project.background}; background-color: ${$page.project.color}`"
    target="_blank"
    >View the website</a
  >
</template>

<script>
export default {
  props: {
    path: String,
  },
}
</script>

<style lang="scss" scoped>
.website-link {
  @apply block py-24 text-3xl font-extrabold text-center transform;

  &:hover {
    @apply -rotate-180;
  }
}
</style>
