<template>
  <g-link class="project-link" :to="path" :style="`background-color: ${background}`">
    <div class="project-link__waterfall" :style="`color: ${color}`">
      <span class="project-link__title" v-for="index in 20" :key="index">{{ brand }}</span>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    path: String,
    brand: String,
    color: String,
    background: String,
  },
}
</script>

<style lang="scss" scoped>
.project-link {
  @apply h-64 relative block text-center transform;

  &__waterfall {
    @apply flex flex-col text-3xl font-extrabold absolute inset-0 overflow-hidden;
  }

  &__title {
    animation: waterfall 10s linear infinite;
  }

  &:hover {
    @apply -rotate-180;
  }

  @keyframes waterfall {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -1000%);
    }
  }
}
</style>
