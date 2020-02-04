<template>
  <div id="app">
    <HelloWorld/>
    <Banner/>
    <Skills/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Banner from './components/Banner.vue'
import Skills from './components/Skills.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Banner,
    Skills
  }
}
</script>

<style lang="scss">
  @import "styles/index.scss"
</style>
