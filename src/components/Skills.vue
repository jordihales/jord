<template>
  <section class="flex flex-wrap h-screen w-full">
    <div class="split--white">
      <h2 class="uppercase black__title">I can use</h2>
    </div>
    <div class="split--pink">
      <ul class="skills-list">
        <li v-for="group in skills" class="skills-list__item">
          <span v-for="(skill, index) in group" class="skills-list__text">
            {{ skill }} <span v-show="index != group.length - 1">/</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      skills: {
        backend: ["Ruby on Rails"],
        html: ["HTML", "HAML", "ERB"],
        css: ["SCSS", "Tailwind"],
        javascript: ["JavaScript", "jQuery"],
        design: ["Illustrator", "XD"]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .skills-list {
    @apply -mb-4;

    &__item {
      @apply mb-4;
    }

    &__text {
      @apply text-xl text-white uppercase inline-block;
      transition: 200ms ease;

      @screen lg {
        @apply text-4xl;
      }
      &:hover {
        filter: blur(5px);
      }
    }
  }
</style>
