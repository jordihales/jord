<template>
  <article class="bg-white">
    <div class="max-w-3xl px-4 py-24 mx-auto prose md:prose-xl" v-html="content" />
  </article>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>
