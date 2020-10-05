<template>
  <header class="py-24 lg:min-h-screen lg:py-0 lg:flex lg:items-center" :style="`background-color: ${background}`">
    <div class="max-w-3xl px-8 mx-auto">
      <h1 class="text-6xl font-extrabold leading-tight" :style="`color: ${color}`">
        {{ title }}
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    background: String,
    color: String,
  },
}
</script>
