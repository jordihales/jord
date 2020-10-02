<template>
  <section class="py-24 lg:min-h-screen lg:py-0 lg:flex lg:items-center">
    <div class="max-w-3xl px-8 mx-auto space-y-8">
      <article>
        <h2 class="mb-4 font-mono text-sm">Skills</h2>

        <ul class="skills">
          <li v-for="(group, index) in skills" :key="`group-${index}`">
            <span v-for="(skill, index) in group" :key="`skill-${index}`" class="skills__text">
              {{ skill }}
              <template v-if="index !== group.length - 1"
                >,</template
              >
            </span>
          </li>
        </ul>
      </article>

      <article>
        <h2 class="mb-4 font-mono text-sm">Designer</h2>

        <p class="font-mono text-lg">
          Graphic designer and illustrator specialising in creating unique visual identities that incorporate ideas of
          minimalism, functionalism and contemporary design.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        identity: ['Brand Identity'],
        print: ['Print Design'],
        illustration: ['Illustration'],
        uiux: ['UI', 'UX'],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.skills {
  &__text {
    @apply text-2xl font-extrabold transition-opacity duration-300;

    &:hover {
      @apply opacity-50;
    }

    @screen lg {
      @apply text-3xl;
    }
  }
}
</style>
