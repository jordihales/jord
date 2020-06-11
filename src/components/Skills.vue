<template>
  <section class="flex flex-wrap py-12">
    <div class="container flex justify-center w-3/5">
      <div class="py-12 px-10 w-1/2">
        <p class="font-mono text-xs mb-3">Skills</p>
        <ul class="skills-list">
          <li v-for="group in skills" class="skills-list__item">
            <span v-for="(skill, index) in group" class="skills-list__text">
              {{ skill }} <span v-show="index != group.length - 1"></span>
            </span>
          </li>
        </ul>
      </div>
      <div class="py-12 px-10 w-1/2">
        <p class="font-mono text-xs">Developer</p>
        <p class="font-mono mt-4">Front end developer specialising in minimalistic tailor-made digital solutions. Blending beautiful, minimal designs with functional, clean code to produce a vision that is both aesthetically and technically pleasing.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      skills: {
        backend: ["Ruby on Rails"],
        html: ["HTML, HAML, ERB"],
        css: ["SCSS, Tailwind"],
        javascript: ["JavaScript, jQuery"],
        design: ["Illustrator, XD"]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .skills-list {
    @apply -mb-2;

    &__item {
    }

    &__text {
      @apply text-2xl font-extrabold font-sans inline-block;
      transition: 200ms ease;

      @screen lg {
        @apply text-3xl;
      }
      &:hover {
        filter: blur(2px);
      }
    }
  }
</style>
