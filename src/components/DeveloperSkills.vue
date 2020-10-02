<template>
  <section class="py-24 lg:min-h-screen lg:py-0 lg:flex lg:items-center bg-gray-50">
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
        <h2 class="mb-4 font-mono text-sm">Developer</h2>

        <p class="font-mono text-lg">
          Front end developer specialising in minimalistic tailor-made digital solutions. Blending beautiful, minimal
          designs with functional, clean code to produce a vision that is both aesthetically and technically pleasing.
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
        backend: ['Ruby on Rails'],
        html: ['HTML', 'HAML', 'ERB'],
        css: ['SCSS', 'Tailwind'],
        javascript: ['JavaScript', 'jQuery'],
        design: ['Illustrator', 'XD'],
        deployment: ['Github', 'Heroku', 'Vercel'],
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
